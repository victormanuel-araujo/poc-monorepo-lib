import { ButtonProps } from '@components'
import { getThemeColor, getPadding, ThemedProps } from '@theme'
import { TouchableOpacity, View } from 'react-native'
import styled, { css } from 'styled-components/native'

/**
 * Apply the presets of the button based on their type
 * the default is the "primary" button
 *
 * @param type - button type: primary | secondary | flat
 */
function types({ type }: ThemedProps<ButtonProps>) {
  switch (type) {
    case 'primary':
      return css`
        background-color: ${getThemeColor('primary')};
        border-color: ${getThemeColor('primary')};
      `

    case 'secondary':
      return css`
        background-color: ${getThemeColor('white')};
        border-color: ${getThemeColor('secondary')};
      `

    case 'flat':
      return css`
        background-color: transparent;
        border-color: transparent;
        border-width: 0;
        padding: 0;
      `

    default:
      return css`
        background-color: ${getThemeColor('primary')};
        border-color: ${getThemeColor('primary')};
      `
  }
}

/**
 * Apply the override of the background color for the button.
 *
 * @param color - name of the theme color
 * @param shade - shade of the color
 */
function color({ color, shade = 'base' }: ThemedProps<ButtonProps>) {
  if (color) {
    return css`
      background-color: ${getThemeColor(color, shade)};
      border-color: ${getThemeColor(color, shade)};
    `
  }
}

/**
 * Apply the padding styles based on "size" prop value
 * the default style is the "small" button.
 *
 * @param size - the button size: small | large
 */
function sizes({ size }: ThemedProps<ButtonProps>) {
  switch (size) {
    case 'large':
      return css`
        padding: ${getPadding('md')} ${getPadding('md', 2)};
      `
    case 'small':
      return css`
        padding: ${getPadding('sm')} ${getPadding('sm', 2)};
      `
    default:
      return css`
        padding: ${getPadding('sm')} ${getPadding('sm', 2)};
      `
  }
}

/**
 * Apply the disabled style to the button, but only if they're not of 'flat' type
 *
 * @param disabled - boolean
 * @param type - the button type: primary | secondary | flat
 */
function disabled({ disabled, type }: ThemedProps<ButtonProps>) {
  // only apply the background style if the button type is different of 'flat'
  if (disabled && type !== 'flat') {
    return css`
      border-color: ${getThemeColor('gray', 'lighter')};
      background-color: ${getThemeColor('gray', 'lighter')};
    `
  }
}

/**
 * Set a custom color to the button border
 *
 * @param borderColor
 * @param borderShade
 */
function borderColor({ borderColor, borderShade }: ThemedProps<ButtonProps>) {
  if (borderColor) {
    return css`
      border-color: ${getThemeColor(borderColor, borderShade)};
    `
  }
}

/**
 * Set a custom size to the border with of the button
 *
 * @param borderWidth
 */
function borderWidth({ borderWidth }: ThemedProps<ButtonProps>) {
  if (borderWidth) {
    return css`
      border-width: ${borderWidth}px;
    `
  }

  return css`
    border-width: ${({ theme }) => theme.units.base / 2}px;
  `
}

export const StyledTouchableOpacity = styled(TouchableOpacity)<Partial<ThemedProps<ButtonProps>>>`
  display: flex;
  position: relative;
  width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
`

export const ButtonChildrenContent = styled(View)<Partial<ThemedProps<ButtonProps>>>`
  display: flex;
  flex-direction: row;
  width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
  opacity: ${({ loading }) => (loading ? 0 : 1)};
`

export const ButtonLoadingContent = styled(View)<Partial<ThemedProps<ButtonProps>>>`
  width: 100%;
  height: 100%;
  position: absolute;
  flex: 1;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonContent = styled(View)<Partial<ThemedProps<ButtonProps>>>`
  position: relative;
  width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
  border-radius: ${({ theme }) => theme.units.radius}px;
  border-width: ${({ theme }) => theme.units.base / 2}px;
  overflow: hidden;
  flex-direction: column;

  ${sizes}
  ${types}
  ${color}
  ${borderWidth}
  ${borderColor}
  ${disabled}
`
