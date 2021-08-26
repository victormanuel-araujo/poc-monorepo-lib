import { View, Text } from '@components'
import { getPadding } from '@theme'
import styled from 'styled-components/native'

export const ExpandIconWrapper = styled(View)`
  position: absolute;
  right: -8px;
  top: -2px;
  width: 55px;
  height: 45px;
`

export const AccordionBodyWrapper = styled(View)`
  overflow: hidden;
`

export const TitleText = styled(Text)`
  display: flex;
  padding-right: ${getPadding('md', 2)};
`
