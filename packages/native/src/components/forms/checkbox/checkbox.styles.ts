import { CheckboxProps, View } from '@components'
import { getThemeColor, ThemedProps, ThemePaddings } from '@theme'
import { Animated, Platform } from 'react-native'
import styled, { css } from 'styled-components/native'

type DisabledThemed = ThemedProps<{ disabled?: boolean }>

/**
 * Apply the input border Radius.
 * It is used in more of one place
 */
function borderRadius() {
  return css`
    border-radius: ${({ theme }) => theme.units.radius}px;
  `
}

/**
 * Apply a custom style to the checkbox when it is rendered in a browser
 * @param disabled - boolean
 */
function webStyle({ disabled }: ThemedProps<{ disabled?: boolean }>) {
  if (Platform.OS === 'web') {
    return css`
      cursor: ${() => (disabled ? 'not-allowed' : 'pointer')};
    `
  }
}

/**
 * Apply the padding in the CheckBoxView
 */
function padding() {
  return css`
    padding: ${({ theme, spacing }: ThemedProps<Partial<CheckboxProps>>) =>
      `${theme.paddings.sm}px ${theme.paddings[spacing]}px`};
  `
}

/**
 * Apply the opacity if the checkbox is disabled
 */
function disabledOpacity() {
  return css`
    opacity: ${({ disabled }: DisabledThemed) => (disabled ? 0.7 : 1)};
  `
}

/**
 * Fix the label alignment in mobile devices.
 */
function labelAlignment() {
  const value = Platform.OS === 'web' ? 0 : 2
  return css`
    transform: translateY(-${value}px);
  `
}

export const CheckboxStyled = styled(View)<{ disabled?: boolean }>`
  ${webStyle};
`

export const CheckboxContent = styled(View)`
  width: auto;
  position: relative;
  flex-direction: row;
  min-height: 56px;
  padding: 0;
`

export const CheckboxView = styled(View)<ThemedProps<{ spacing: keyof ThemePaddings }>>`
  flex-direction: row;
  align-items: center;
  border: 1px solid;

  ${padding}
  ${borderRadius};
`

export const IconWrapper = styled(View)`
  position: relative;
  width: auto;
`

export const IconCheckedView = styled(View)<DisabledThemed>`
  border-radius: 12px;
  width: 24px;
  height: 24px;
  border: 1px solid ${getThemeColor('black')};
  align-items: center;
  justify-content: center;
  background-color: ${getThemeColor('white')};
  ${disabledOpacity}
`

export const IconCheckViewWrapper = styled(Animated.View)`
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
`

export const LabelWrapper = styled(View)<DisabledThemed & { fluid?: boolean }>`
  width: auto;
  justify-content: center;
  align-items: flex-start;
  ${disabledOpacity};
  ${labelAlignment};
`

export const CheckboxShadow = styled(View)<ThemedProps<Partial<CheckboxProps>>>`
  width: 100%;
  height: 100%;
  padding: 0;
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${({ checkedBackgroundColor, checkedBackgroundColorShade }) =>
    getThemeColor(checkedBackgroundColor, checkedBackgroundColorShade)};
  ${borderRadius}
`
