import { View, ViewProps } from '@components'
import { getThemeColor } from '@theme'
import { Animated } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styled, { css } from 'styled-components/native'

import { SkeletonProps } from './skeleton.types'

/**
 * Use React Native Animated library to create an animated version of LinearGradient component
 */
const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient)

/**
 * This function handle the color and the shade passed from the props and also creates a transparent border
 *
 *
 * @param backgroundColor - the background color passed by props to the skeleton component
 * @param backgroundShade - the background shade passed by props to the skeleton component
 */
const getWrapperBackgroundColor = ({
  backgroundColor,
  backgroundShade,
}: Pick<SkeletonProps, 'backgroundColor' | 'backgroundShade'>) => {
  return css`
    border-color: ${getThemeColor(backgroundColor, backgroundShade, '00')};
    background-color: ${getThemeColor(backgroundColor, backgroundShade)};
  `
}

/* -------------------- */

export const GradientSkeleton = styled(AnimatedGradient).attrs(({ direction }: SkeletonProps) => ({
  start: { x: direction === 'ltr' ? 0 : 1, y: 1 },
  end: { x: direction === 'ltr' ? 1 : 0, y: 1 },
  locations: [0, 0.25, 0.6, 0.85, 1],
}))<Partial<SkeletonProps>>`
  position: absolute;
  width: ${({ width }) => width || 0}px;
  height: ${({ height }) => height || 'auto'}px;
  top: 0;
`
export const SkeletonWrapper = styled(View)<
  ViewProps & Pick<SkeletonProps, 'height' | 'backgroundColor' | 'backgroundShade' | 'customBorderRadius'>
>`
  height: ${({ height }) => height || 'auto'}px;
  border-radius: ${({ customBorderRadius }) => customBorderRadius}px;
  border-width: 1px;
  border-style: solid;
  overflow: hidden;
  ${getWrapperBackgroundColor};
`
