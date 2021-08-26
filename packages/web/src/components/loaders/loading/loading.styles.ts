import { getThemeColor } from '@theme'
import styled, { keyframes } from 'styled-components'

import { LoadingProps } from './loading.types'

const rotate = keyframes`
from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const LoadingWrapper = styled.div<LoadingProps>`
  width: ${({ size, fluid }) => (!fluid ? size + 'px' : 'auto')};
  height: ${({ size, fluid }) => (!fluid ? size + 'px' : 'auto')};
  border: 3px solid ${({ color }) => getThemeColor(color)};
  border-radius: 100%;
  border-right-color: transparent;
  border-left-color: transparent;
  border-bottom-color: transparent;
  animation: ${rotate} 0.5s linear infinite;
`
