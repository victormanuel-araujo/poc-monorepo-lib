import React from 'react'

import { Animated, LayoutChangeEvent, Platform, StyleProp, TouchableOpacity } from 'react-native'
import { ThemeContext } from 'styled-components/native'

import { Icon } from '../../icons'
import { View } from '../../layout'
import { Card } from '../card'

import { AccordionBodyWrapper, ExpandIconWrapper, TitleText } from './accordion.style'
import { AccordionProps } from './accordion.types'

export const Accordion: React.FC<AccordionProps> = ({
  title,
  titleProps,
  expanded,
  arrowColor,
  children,
  ...props
}: AccordionProps): React.FunctionComponentElement<AccordionProps> => {
  const theme = React.useContext(ThemeContext)
  const [isExpand, setIsExpand] = React.useState(expanded)
  const [animation] = React.useState<Animated.Value>(new Animated.Value(0))
  const [maxHeight, setMaxHeight] = React.useState(400)

  React.useEffect(() => {
    setIsExpand(expanded || false)
  }, [expanded])

  /**
   * This effect is triggered always when the `expanded` value undergo a change.
   * When this value change, this function will start the animation to show or hide
   * the card body.
   */
  React.useEffect(() => {
    const toValue = isExpand ? 1 : 0
    Animated.spring(animation, { toValue, bounciness: 5, useNativeDriver: false }).start()
  }, [isExpand])

  // the animation to the card body, to show and hide it contents
  const AccordionBodyStyle: StyleProp<any> = {
    maxHeight: animation.interpolate({ inputRange: [0, 1], outputRange: [0, maxHeight] }),
    opacity: animation,
  }

  // animation to the expand arrow of the card.
  // The `any` in `StyleProp` is necessary to not break the lint
  const expandedArrowStyle: StyleProp<any> = {
    transform: [{ rotate: animation.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '-180deg'] }) }],
  }

  const defineMaxHeight = (event: LayoutChangeEvent) => {
    const _maxHeight = event.nativeEvent.layout.height
    if (_maxHeight !== maxHeight) {
      setMaxHeight(event.nativeEvent.layout.height + 50)
    }
  }

  const titleTransform = Platform.OS === 'web' ? 0 : -2
  return (
    <TouchableOpacity onPress={() => setIsExpand(!isExpand)} activeOpacity={0.8}>
      <Card {...props}>
        <View spacing="sm">
          <View width="100%" style={{ transform: [{ translateY: titleTransform }] }}>
            <TitleText {...titleProps}>{title}</TitleText>
          </View>
          <ExpandIconWrapper alignment="center" justifyContent="center" width="auto" style={expandedArrowStyle}>
            <Icon.Material icon="expand-more" shape="none" color={arrowColor} size={30} />
          </ExpandIconWrapper>
          <AccordionBodyWrapper style={AccordionBodyStyle}>
            <View onLayout={defineMaxHeight} paddingTop={theme.paddings.md}>
              {children}
            </View>
          </AccordionBodyWrapper>
        </View>
      </Card>
    </TouchableOpacity>
  )
}

Accordion.defaultProps = {
  expanded: false,
}
