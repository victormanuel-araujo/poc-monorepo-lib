import { getThemeColor, ThemedProps } from '@theme'
import { View } from 'react-native'
import styled, { css } from 'styled-components/native'

import { ScreenProps } from './screen.types'

/**
 *  Get the width and height based on devices.
 *  This function ensures that our height and width will always be 100% regardless of the device.
 * */

export const StyledScreen = styled(View)<ThemedProps<ScreenProps & { width: number; height: number }>>`
  display: flex;
  flex-direction: column;
  background-color: ${({ background, backgroundShade }) => getThemeColor(background, backgroundShade)};
  min-width: ${({ width }) => width}px;
  min-height: ${({ height }) => height}px;
`
