import * as React from 'react'

import { View } from '@components'
import { LayoutChangeEvent } from 'react-native'

import { CardShadow, CardContent, CardContentInner } from './card.styles'
import { CardProps } from './card.types'

/**
 * The card is a simple container, where you can put whatever you want.
 *
 * Make content stand out, with a colored shadow and border.
 */
export const Card: React.FC<CardProps> = ({
  children,
  spacing,
  opacity,
  offset,
  borderColor,
  borderColorShade,
  borderWidth,
  color,
  shade,
  viewProps,
  ...props
}: CardProps): React.FunctionComponentElement<CardProps> => {
  /**
   * width and setWidth are used to save the card content width,
   * to use it in the "shadow" of the card
   */
  const [width, setWidth] = React.useState<number>(0)

  /**
   * This function, update the "width" state, only if the event `onLayout` value
   * are different of the previous width state.
   *
   * ------
   *
   * Why use it? The default behavior of the card component, is to have 100% of the
   * height and 100% of the width of the component content.
   * In Android (probably in IOS too), it doesn't work correctly... if we pass
   * 100% in width, the "shadow" will get the 100% of the screen instead the
   * component content. In this case we must to save the content width,
   * and use is as an absolute value in the "shadow" style
   *
   * @param event - native layout change event
   */
  const saveCardWidth = (event: LayoutChangeEvent) => {
    const eventWidth = event.nativeEvent.layout.width
    if (eventWidth !== width) {
      setWidth(eventWidth)
    }
  }

  return (
    <CardContent testID="card">
      <CardShadow
        color={color}
        shade={shade}
        borderWidth={borderWidth}
        borderColor={borderColor}
        borderColorShade={borderColorShade}
        opacity={opacity}
        offset={offset}
        style={{ width }}
        testID="card-shadow"
      />

      <CardContentInner
        borderWidth={borderWidth}
        borderColor={borderColor}
        borderColorShade={borderColorShade}
        {...props}
        onLayout={saveCardWidth}
        testID="card-inner"
      >
        <View spacing={spacing} {...viewProps}>
          {children}
        </View>
      </CardContentInner>
    </CardContent>
  )
}

Card.defaultProps = {
  color: 'primary',
  borderWidth: 1,
  borderColor: 'black',
  backgroundColor: 'white',
  spacing: 'sm',
  opacity: 1,
  offset: 7,
}
