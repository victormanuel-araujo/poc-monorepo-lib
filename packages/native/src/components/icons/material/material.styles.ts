import { getThemeColor, ThemedProps, ThemePaddings } from '@theme'
import { View } from 'react-native'
import styled, { css } from 'styled-components/native'

import { MaterialIconProps } from './material.types'

/* Not moving to .types file, just avoiding repeating this too much. */
type PropsWithTheme = Omit<ThemedProps<MaterialIconProps & { $padding: keyof ThemePaddings }>, 'icon'>

function getSize(props: PropsWithTheme) {
  return props.theme.paddings[props.$padding] + props.size
}

function containerSize(props: PropsWithTheme) {
  const size = `${getSize(props)}px`

  return css`
    height: ${size};
    width: ${size};
  `
}

function containerShape(props: PropsWithTheme) {
  switch (props.shape) {
    case 'round':
      return css`
        background-color: ${getThemeColor(props.background)};
        border-radius: ${getSize(props)}px;
      `
    case 'round-square':
      return css`
        background-color: ${getThemeColor(props.background)};
        border-radius: ${(props) => props.theme.units.base}px;
      `
    case 'none':
    default:
      return null
  }
}

function containerDimensions({ width, height }: PropsWithTheme) {
  return css`
    ${width ? `width: ${width}px;` : null}
    ${height ? `height: ${height}px;` : null}
  `
}

function containerBorder(props: PropsWithTheme) {
  if (!props.border) {
    return null
  }

  return css`
    border: 1px solid ${getThemeColor(props.border)};
  `
}

export const IconContainer = styled(View)<PropsWithTheme>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${containerSize}
  ${containerShape}
  ${containerBorder}
  ${containerDimensions}
`
