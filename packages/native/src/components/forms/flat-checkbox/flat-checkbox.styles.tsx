import { View } from '@components'
import { getThemeColor, ThemedProps } from '@theme'
import { Platform } from 'react-native'
import styled, { css } from 'styled-components/native'

import { FlatCheckboxCheckedProps, FlatCheckboxProps, FlatCheckboxUncheckedBorder } from './flat-checkbox.types'

/**
 * When the component is rendered on web, it should set the cursor correctly
 * @param disabled - boolean
 */
function handleDisabledWeb({ disabled }: ThemedProps<{ disabled?: boolean }>) {
  if (Platform.OS === 'web') {
    return css`
      cursor: ${() => (disabled ? 'not-allowed' : 'pointer')};
    `
  }
}

/**
 * This function handles the correct alignment on mobile devices.
 * When it's rendered on Android or iOS, the text is always a little to the bottom, this should fix is!
 */
function centralizeTextWithCheckbox() {
  const value = Platform.OS === 'web' ? 0 : 2
  return css`
    transform: translateY(-${value}px);
  `
}

// -------------------------------------- //

export const FlatCheckboxContentWrapper = styled(View).attrs(() => ({
  dir: 'row',
  alignment: 'center',
}))`
  ${handleDisabledWeb}
`

export const CheckboxWrapper = styled(View)<FlatCheckboxCheckedProps & Pick<FlatCheckboxProps, 'radius' | 'checked'>>`
  ${({ background, backgroundShade, radius, checked }) => css`
    width: auto;
    border-radius: ${radius}px;
    background-color: ${checked ? getThemeColor(background, backgroundShade) : 'transparent'};
  `}
`

export const UncheckedContainer = styled(View)<
  FlatCheckboxUncheckedBorder & Pick<FlatCheckboxProps, 'size' | 'radius' | 'checked'>
>`
  ${({ size, thickness, color, shade, radius, checked }) => css`
    width: ${size}px;
    height: ${size}px;
    border-radius: ${radius}px;
    border-width: ${checked ? 0 : thickness}px;
    border-color: ${getThemeColor(color, shade)};
  `}
`

export const DisabledCheckboxContainer = styled(View)<Pick<FlatCheckboxProps, 'size' | 'radius'>>`
  ${({ size, radius }) => css`
    width: ${size}px;
    height: ${size}px;
    border-radius: ${radius}px;
    background-color: ${getThemeColor('gray', 'light')};
    border-color: ${getThemeColor('white')};
    justify-content: center;
    align-items: center;
  `}
`
export const DisabledCheckboxSignal = styled(View)`
  border-width: 1px;
  border-color: ${getThemeColor('gray')};
  width: 0px;
  height: 85%;
  transform: rotate(-135deg);
`

export const ChildrenWrapper = styled(View)<Pick<FlatCheckboxProps, 'textSpacing' | 'disabled'>>`
  margin-left: ${({ textSpacing, theme }) => theme.paddings[textSpacing] || 0}px;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  ${centralizeTextWithCheckbox}
`
