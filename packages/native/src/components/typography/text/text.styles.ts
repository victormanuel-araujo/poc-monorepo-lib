import { getFontFamily, getFontSize, getFontWeight, getThemeColor, ThemedProps } from '@theme'
import { get } from 'lodash'
import { Animated } from 'react-native'
import styled, { css } from 'styled-components/native'

import { TextProps } from './text.types'

/**
 * define the font color, only if the "color" prop is correctly defined
 *
 * @param props - styled props and text props
 */
function color(props: ThemedProps<TextProps>) {
  if (props.color) {
    const shade = get(props, ['shade'], 'base')
    return css`
      color: ${getThemeColor(props.color, shade)};
    `
  }
}

/**
 * define the color shade, only if the "shade" prop is correctly defined
 * if the "color" prop is not set, the default is "black" color
 *
 * @param props - styled props and text props
 */
function shade(props: ThemedProps<TextProps>) {
  if (props.shade) {
    const color = get(props, ['color'], 'black')
    return css`
      color: ${getThemeColor(color, props.shade)};
    `
  }
}

/**
 * Define the styles based on "type" prop.
 * the "type" can receive any value defined at `TextTypes`
 *
 * @param props - styled props and text props
 */
function textType(props: ThemedProps<TextProps>) {
  switch (props.type) {
    case 'title':
      return css`
        ${getFontWeight('black')};
        ${getFontSize('lg')};
      `
    case 'description':
      return css`
        ${getFontWeight('medium')};
        ${getFontSize('md')};
      `
    case 'tips':
      return css`
        color: ${getThemeColor('gray', 'dark')};
        ${getFontWeight('medium')};
        ${getFontSize('md')};
      `
    case 'error':
      return css`
        color: ${getThemeColor('red')};
        ${getFontWeight('medium')};
        ${getFontSize('md')};
      `
    case 'button-label':
      return css`
        ${getFontWeight('bold')};
        ${getFontSize('md')};
      `
    case 'input-label':
      return css`
        color: ${getThemeColor('gray', 'dark')};
        ${getFontWeight('medium')};
        ${getFontSize('md')};
      `

    default:
      return css`
        ${getFontWeight('medium')};
        ${getFontSize('md')};
      `
  }
}

/**
 * Define the text alignment style, only if the "align" prop is defined.
 *
 * @param props - styled props and text props
 */
function align(props: ThemedProps<TextProps>) {
  if (props.align) {
    return css`
      text-align: ${props.align};
    `
  }
}

/**
 * define the font weight, only if the prop "weight" is defined.
 *
 * @param props - styled props and text props
 */
function weight(props: ThemedProps<TextProps>) {
  if (props.weight) {
    return getFontWeight(props.weight)
  }
}

/**
 * define a override style to the font size, only if the "size" prop is defined.
 * this style already change the line-height to the correct size based on font-size.
 *
 * @param props - styled props and text props
 */
function size(props: ThemedProps<TextProps>) {
  if (props.size) {
    return getFontSize(props.size)
  }
}

/**
 * If the "decoration" prop is defined, apply the a style for text-decoration-line
 *
 * @param props - styled props and text props
 */
function decoration(props: ThemedProps<TextProps>) {
  if (props.decoration) {
    return css`
      text-decoration-line: ${props.decoration};
    `
  }
}

/**
 * if the "family" prop is defined, override the style for a font-family
 * @param props
 */
function family(props: ThemedProps<TextProps>) {
  if (props.family) {
    return css`
      ${getFontFamily(props.family)}
    `
  }
}

/**
 * Compose the styled text with all styles and validations
 */
export const TextStyled = styled(Animated.Text)<TextProps>`
  color: ${getThemeColor('black')};
  ${getFontFamily('default')}

  ${textType};
  ${color};
  ${shade};
  ${align};
  ${weight};
  ${size};
  ${decoration};
  ${family};
`
