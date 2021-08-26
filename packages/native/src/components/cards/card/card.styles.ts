import { CardProps } from '@components'
import { getThemeColor, ThemedProps } from '@theme'
import { get } from 'lodash'
import { View } from 'react-native'
import styled, { css } from 'styled-components/native'

/**
 * Apply the border radius style. If the `customBorderRadius` is defined, the style
 * will be based in this value, if isn't defined, the border radius will use the value
 * defined in the theme
 *
 * @param theme - default styled component theme prop
 * @param customBorderRadius - the custom border radius | number
 */
function borderRadius({ theme, customBorderRadius }: ThemedProps<CardProps>) {
  if (customBorderRadius) {
    return css`
      border-radius: ${customBorderRadius}px;
    `
  }
  return css`
    border-radius: ${get(theme, ['units', 'radius'], 0)}px;
  `
}

/**
 * Apply the border style, width and color
 *
 * @param borderWidth - number
 * @param borderColor - string - name of the color defined in the theme
 * @param borderColorShade - string - name of the shade of the color defined in theme
 */
function border({ borderWidth, borderColor, borderColorShade }: ThemedProps<CardProps>) {
  return css`
    border: ${borderWidth}px solid ${getThemeColor(borderColor, borderColorShade)};
  `
}

/**
 * Apply the background color to the highlight part of the card
 *
 * @param color - string - name of the color defined in theme
 * @param shade - string - name of the color shade defined in the theme
 */
function backgroundColorHighlight({ color, shade }: ThemedProps<CardProps>) {
  return css`
    background-color: ${getThemeColor(color, shade)};
  `
}

/* -------------------- */

export const CardContent = styled(View)`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const CardShadow = styled(View)<ThemedProps<CardProps>>`
  display: flex;
  height: 100%;
  position: absolute;
  left: ${({ offset }) => `-${offset}px`};
  bottom: ${({ offset }) => `-${offset}px`};
  opacity: ${({ opacity }) => opacity};
  border: none;

  ${borderRadius};
  ${backgroundColorHighlight};
`

export const CardContentInner = styled(View)<ThemedProps<CardProps>>`
  position: relative;
  background-color: ${({ backgroundColor, backgroundShade }) => getThemeColor(backgroundColor, backgroundShade)};

  ${borderRadius}
  ${border}
`
