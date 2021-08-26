import { ScrollViewProps } from '@components'
import { getThemeColor } from '@theme'
import { ScrollView as RNScrollView } from 'react-native'
import styled from 'styled-components/native'

export const StyledScrollView = styled(RNScrollView)<ScrollViewProps>`
  display: flex;
  flex: 1;
  width: 100%;

  background-color: ${({ backgroundColor, backgroundColorShade }) =>
    getThemeColor(backgroundColor, backgroundColorShade)};
`
