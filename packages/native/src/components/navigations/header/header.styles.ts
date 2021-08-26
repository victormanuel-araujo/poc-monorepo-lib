import { View } from '@components'
import { getThemeColor, ThemedProps } from '@theme'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

import { HeaderProps } from './header.types'

/**
 * Apply a shared style to the components related to the adornment
 */
function adornmentBaseStyle() {
  return css`
    min-width: 50px;
    width: auto;
  `
}

/* ----------------- */

export const StyledHeader = styled(View)<ThemedProps<HeaderProps>>`
  width: 100%;
  background-color: ${({ backgroundColor }) => getThemeColor(backgroundColor)};
  justify-content: space-between;
  align-items: center;
  min-height: ${({ theme }) => theme.units.header}px;
  flex-direction: row;
`

export const AdornmentView = styled(View)`
  height: ${({ theme }) => theme.units.header}px;
  ${adornmentBaseStyle}
`
export const AdornmentAction = styled(TouchableOpacity)`
  height: ${({ theme }) => theme.units.header}px;
  align-items: center;
  justify-content: center;
  ${adornmentBaseStyle}
`
