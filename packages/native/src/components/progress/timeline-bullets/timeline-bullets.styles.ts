import { TimelineBulletsProps, View } from '@components'
import { getThemeColor } from '@theme'
import styled from 'styled-components/native'

export const BulletConnector = styled(View)<{ transparent?: boolean }>`
  flex: 1;
  width: 1px;
  background-color: ${({ transparent }) => (transparent ? getThemeColor('transparent') : getThemeColor('gray'))};
`

export const BulletDot = styled(View)<Partial<TimelineBulletsProps> & { isActive?: boolean }>`
  width: ${({ size, isActive }) => (isActive ? size * 1.5 : size)}px;
  height: ${({ size, isActive }) => (isActive ? size * 1.5 : size)}px;
  border-radius: ${({ size, isActive }) => (isActive ? size * 1.5 : size)}px;
  background-color: ${({ color, highlightColor, isActive }) => getThemeColor(isActive ? highlightColor : color)};
  border: 1px solid black;

  display: flex;
`
