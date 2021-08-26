import { Theme } from './theme.types'
import { colors, fonts, fontSizes, fontWeights, lineHeights, paddings, units } from './theme.values'
/*
 * in the future, if exists a second theme, just have to create a second
 * composition as same is `theme`.
 */

/**
 * Default gama theme - SMASH
 */
export const theme: Theme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  units,
  paddings,
}
