import { StepIndicatorProps, View } from '@components'
import { getThemeColor } from '@theme'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const StepIndicatorDot = styled(View)<Partial<StepIndicatorProps> & { isActive?: boolean }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  background-color: ${({ color }) => getThemeColor(color)};

  display: flex;
  position: relative;
  opacity: ${({ isActive, inactiveOpacity }) => (isActive ? 1 : inactiveOpacity)};
`

export const StepIndicatorTouchable = styled(TouchableOpacity)`
  position: relative;
`
