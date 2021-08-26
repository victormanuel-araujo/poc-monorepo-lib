import { getThemeColor, ThemeColorsShade, ThemedProps } from '@theme'
import { get } from 'lodash'
import { Animated } from 'react-native'
import styled, { css } from 'styled-components/native'

import { ViewProps } from './view.types'

/**
 * This function return the correct padding, based on "spacing" prop.
 * if the "customMultiplier" prop was defined, the spacing will be overridden by
 * the unit base multiplied by the customMultiplier
 *
 * @param spacing - the name of the presets of paddings - sm | md | lg etc
 * @param customMultiplier - the custom multiplier to override the spacing
 * @param theme - default theme passed by styled components
 */
function getSpacing({ spacing, customMultiplier, theme }: ThemedProps<ViewProps>) {
  const padding = customMultiplier ? theme.units.base * customMultiplier : get(theme, ['paddings', spacing], 0)
  return `${padding}px`
}

/**
 * If the "alignment" prop was defined, apply the align-items style
 *
 * @param alignment - the alignment of the view - flex-start | center | flex-end
 */
function align({ alignment }: ThemedProps<ViewProps>) {
  if (alignment) {
    return css`
      align-items: ${alignment};
    `
  }
}

/**
 * If the prop "direction" was defined, apply the correct direction for the View
 * component
 *
 * @param direction - same as flex-direction - column | row | row-reverse |  ect
 */
function direction({ dir }: ThemedProps<ViewProps>) {
  if (dir) {
    return css`
      flex-direction: ${dir};
    `
  }
}

/**
 * Control the display style to the View
 *
 * @param display - Same as display style - flex | none
 */
function display({ display }: ThemedProps<ViewProps>) {
  if (display) {
    return css`
      display: ${display};
    `
  }
}

/**
 * This style only works in the web client, define a custom value to the "flex" style
 * to control the width of the view.
 *
 * @param flex - the value of the new "flex" style
 */
function flex({ flex }: ThemedProps<ViewProps>) {
  if (flex) {
    return css`
      flex: ${flex};
    `
  }
}

/**
 * If the prop "justifyContent" was defined, apply the "justify-content" style
 * to the view
 *
 * @param justifyContent - same as justify-content style values - center | flex-start | etc
 */
function justify({ justifyContent }: ThemedProps<ViewProps>) {
  if (justifyContent) {
    return css`
      justify-content: ${justifyContent};
    `
  }
}

/**
 * Define the position style to the View
 *
 * @param position - position style values - relative | absolute | fixed
 */
function position({ position }: ThemedProps<ViewProps>) {
  if (position) {
    return css`
      position: ${position};
    `
  }
}

/**
 * override the padding-right style, or, apply the default value to padding-right
 * using the getSpacing function
 *
 * @param pr - override padding right value
 */
function paddingRight({ paddingRight }: ThemedProps<ViewProps>) {
  if (paddingRight || paddingRight === 0) {
    return css`
      padding-right: ${paddingRight}px !important;
    `
  }
  return css`
    padding-right: ${getSpacing};
  `
}

/**
 * override the padding-bottom style, or, apply the default value to padding-bottom
 * using the getSpacing function
 *
 * @param pb - override padding bottom value
 */
function paddingBottom({ paddingBottom }: ThemedProps<ViewProps>) {
  if (paddingBottom || paddingBottom === 0) {
    return css`
      padding-bottom: ${paddingBottom}px !important;
    `
  }
  return css`
    padding-bottom: ${getSpacing};
  `
}

/**
 * override the padding-left style, or, apply the default value to padding-left
 * using the getSpacing function
 *
 * @param pr - override padding left value
 */
function paddingLeft({ paddingLeft }: ThemedProps<ViewProps>) {
  if (paddingLeft || paddingLeft === 0) {
    return css`
      padding-left: ${paddingLeft}px !important;
    `
  }
  return css`
    padding-left: ${getSpacing};
  `
}

/**
 * override the padding-top style, or, apply the default value to padding-top
 * using the getSpacing function
 *
 * @param pr - override padding top value
 */
function paddingTop({ paddingTop }: ThemedProps<ViewProps>) {
  if (paddingTop || paddingTop === 0) {
    return css`
      padding-top: ${paddingTop}px !important;
    `
  }
  return css`
    padding-top: ${getSpacing};
  `
}

/**
 * override the width style. This value can be used on two ways:
 * - when use as number, the value was placed as pixels
 * - when use as string, the script will consider as percentage
 *
 * @param width
 */
function width({ width }: ThemedProps<ViewProps>) {
  const _width = typeof width === 'string' ? width : `${width}px`

  if (width) {
    return css`
      width: ${_width};
    `
  }
}

/**
 * if the "background" prop was defined, define a background to the view, using the
 * color shade
 *
 * @param background - the name of the theme color
 * @param backgroundShade - the shade of the color
 */
function background({ background, backgroundShade }: ThemedProps<ViewProps>) {
  if (background) {
    const shade: keyof ThemeColorsShade = backgroundShade ? backgroundShade : 'base'
    return css`
      background-color: ${getThemeColor(background, shade)};
    `
  }
}

export const StyledView = styled(Animated.View)<Partial<ThemedProps<ViewProps>>>`
  width: 100%;
  position: relative;

  ${align}
  ${direction}
  ${display}
  ${width}
  ${flex}
  ${justify}
  ${position}
  ${paddingRight}
  ${paddingBottom}
  ${paddingLeft}
  ${paddingTop}
  ${background}
`
