import { View, Text } from '@components'
import { getThemeColor } from '@theme'
import styled, { css } from 'styled-components/native'

export const FakeLineDashed = styled(View)`
  height: 30%;
  min-height: 12px;
  z-index: -1;

  justify-content: space-between;
  position: absolute;
  left: 13px;
  bottom: 0px;
`

export const FakeLineDash = styled(View)`
  width: 1px;
  height: 3px;
  background-color: ${getThemeColor('black')};
`

export const Line = styled(View)<{ location: 'start' | 'end' }>`
  width: 1px;
  height: 50%;
  background: ${getThemeColor('black', 'base')};
  position: absolute;
  left: 13px;
  z-index: -1;
  min-height: 12px;
  ${({ location }) => css`
    ${location === 'start' ? 'top' : 'bottom'}: 0px;
  `}
`

export const ItemLabel = styled(Text)`
  margin-left: ${({ theme }) => theme.paddings.sm}px;
`
