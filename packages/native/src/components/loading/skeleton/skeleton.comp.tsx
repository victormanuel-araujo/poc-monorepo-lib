import React, { useContext, useEffect, useMemo, useState } from 'react'

import { getThemeColor } from '@theme'
import { Animated, LayoutChangeEvent, useWindowDimensions, LayoutRectangle, Platform } from 'react-native'
import { ThemeContext } from 'styled-components/native'

import { GradientSkeleton, SkeletonWrapper } from './skeleton.styles'
import { SkeletonProps } from './skeleton.types'

/**
 * Skeleton component, is a loader with a loop animation that could start from left or right
 * depending on the prop `direction`
 * It's required to pass the height prop to assure the component functionality
 *
 * @example
 *
 * ```typescript
 * <Skeleton height={90} />
 * ```
 */
export const Skeleton: React.FC<SkeletonProps> = (props) => {
  /**
   * Bringing the theme from the context so that it correctly applies
   * the colors and shades received on the props
   */
  const theme = useContext(ThemeContext)

  /**
   * Destructure props to use each prop easier
   */
  const {
    height,
    width,
    backgroundColor,
    backgroundShade,
    highlightColor,
    highlightShade,
    customBorderRadius,
    direction,
    speed = 900,
  } = props

  /**
   * Using the window width to calculate where the animation should start or end
   * depending on direction prop
   * if 3 skeletons are being used simultaneously they all will start and end at the same place
   */
  const { width: D_WIDTH } = useWindowDimensions()

  /**
   * The value of the `onLayout` function of the skeleton wrapper view, this is also used to
   * calculate the start and end point of the animation with the width above
   */
  const [wrapperLayout, setWrapperLayout] = useState<LayoutRectangle>(null)

  /**
   * The animation controller state that handles the LinearGradient component animation
   */
  const [animation] = useState<Animated.Value>(new Animated.Value(0))

  /**
   * Function created to get the layout from nativeEvent prop of the skeleton wrapper view
   * It handles the `wrapperLayout` state and check if is necessary to set it
   *
   * @param event - Component layout event
   */
  const measureLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    if (!!wrapperLayout && nativeEvent.layout.x === wrapperLayout.x) return null
    setWrapperLayout(nativeEvent.layout)
  }

  function _getNumberForHexadecimal(hexadecimal: string) {
    const [_, ...hexaValues] = hexadecimal.split('')
    const rgbaValues = []

    let count = 0
    while (count < hexaValues.length) {
      const decimal = parseInt(hexaValues[count], 16) * 15 + parseInt(hexaValues[count + 1], 16)
      rgbaValues.push(decimal)
      count += 2
    }

    return rgbaValues
  }

  const hexToRgba = (color: string): string => {
    const [R, G, B, A] = _getNumberForHexadecimal(color)
    return `rgba(${R}, ${G}, ${B}, ${(A || 255 / 255).toFixed(1)})`
  }

  /**
   * The animation interpolation variable that handles the animation input and output range
   * Here we are using the useMemo because it is a constant animation, will always have the same value
   * and doesn't have to get the same value each time the animation occurs
   * Also used to validade the `wrapperLayout` variable
   */
  const animationInterpolation = useMemo<Animated.AnimatedInterpolation>(() => {
    if (!wrapperLayout) return null

    return animation.interpolate({
      inputRange: [0, 1],
      outputRange:
        direction === 'ltr'
          ? [-wrapperLayout.x - 240, D_WIDTH - wrapperLayout.x]
          : [D_WIDTH - wrapperLayout.x, -wrapperLayout.x - 240],
    })
  }, [wrapperLayout])

  /**
   * Each time the Skeleton component is called, we create an animation loop to start it, or stop when it's necessary
   * We are also setting the animation value to 0 because if we don't, when the screen updates and the animation is still occurring
   * the animation gets the current value and moves from this value to 1, instead 0 to 1
   */
  useEffect(() => {
    animation.setValue(0)
    const animationLoop = Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        useNativeDriver: Platform.OS !== 'web',
        duration: speed,
      })
    )

    animationLoop.start()
    return animationLoop.stop
  }, [animation])

  /**
   * The wrapperToGradientColor is used to make it slight transparent using the `highlighColor` passed by props
   * to match prettier the gradient animation flow
   */
  const wrapperToGradientColor = hexToRgba(getThemeColor(highlightColor, highlightShade, '80')({ theme }))
  /**
   * The `gradientColor` is the main highlightColor applied with a little alpha to match the animation.
   * If the alpha was not applied, the highlight color could be too strong or confuded with the background color
   * is case it came to be white
   */
  const gradientColor = hexToRgba(getThemeColor(highlightColor, highlightShade, 'BB')({ theme }))

  return (
    <SkeletonWrapper
      testID="skeleton-comp"
      width={width}
      height={height}
      onLayout={measureLayout}
      backgroundColor={backgroundColor}
      backgroundShade={backgroundShade}
      customBorderRadius={customBorderRadius}
    >
      <GradientSkeleton
        testID="skeleton-gradient-comp"
        style={{ transform: [{ translateX: animationInterpolation || 0 }] }}
        colors={['transparent', wrapperToGradientColor, wrapperToGradientColor, gradientColor, 'transparent']}
        direction={direction}
        height={height}
        width={160}
      />
    </SkeletonWrapper>
  )
}

Skeleton.defaultProps = {
  width: '100%',
  backgroundColor: 'gray',
  backgroundShade: 'lighter',
  highlightColor: 'white',
  highlightShade: 'base',
  customBorderRadius: 0,
  direction: 'ltr',
  speed: 900,
}
