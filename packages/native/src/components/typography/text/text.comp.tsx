import * as React from 'react'

import { TextStyled } from './text.styles'
import { TextProps } from './text.types'

/**
 * The Text Component is used to show some text with the default patterns and
 * presets of styles. Use it instead of `Text` from React Native
 *
 * It extends the `Text` component from React Native, so anything that works
 * with there works here too.
 */
const Text: React.FC<TextProps> = (props: TextProps): React.FunctionComponentElement<TextProps> => {
  return (
    <TextStyled accessibilityRole="text" {...props}>
      {props.children}
    </TextStyled>
  )
}

Text.defaultProps = {
  type: 'description',
}

export { Text }
