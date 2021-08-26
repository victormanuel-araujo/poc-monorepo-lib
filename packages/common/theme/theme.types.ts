import { ThemedStyledProps } from 'styled-components'

import { colors, fonts, fontSizes, fontWeights, lineHeights, paddings, units } from './theme.values'
export { ThemeProps } from 'styled-components/native'

// definitions of theme types

/**
 * the name of the colors of theme
 */
export type ThemeColorsName = 'primary' | 'secondary' | 'black' | 'white' | 'gray' | 'red' | 'transparent' | 'yellow'

/**
 * Existing tones for each color (ThemeColorsName). Each one color must have the
 * tone "base" and optionally the "light", "lighter", "dark" and "darker" tones
 */
export interface ThemeColorsShade {
  base: string
  light?: string
  lighter?: string
  dark?: string
  darker?: string
}

/**
 * The group of the colors (ThemeColorsName) and shades (ThemeColorsShade)
 *
 * @example
 * Each one color in ThemeColorsName becomes a key of an object, this object must have
 * the shades of ThemeColorsShade
 * ```json
 * {
 *   primary: {
 *     base: '#fff',
 *     light: '#fff',
 *     lighter: '#fff',
 *   }
 * }
 * ```
 */
export type ThemeColorsGroup = { [color in ThemeColorsName]: ThemeColorsShade }

/**
 * Final type of theme colors, bases on colors defined before.
 * that is: Union of ThemeColorsName and ThemeColorsShades with their values defined
 */
export type ThemeColors = typeof colors

/**
 * Type created based on values of font families defined on theme creation.
 * That is: If a family needs to be adde or removed a family, the type are
 * updated automatically
 */
export type ThemeFonts = { [fontName in keyof typeof fonts]: string }
/**
 * Type created based on font sizes also defined when creating the theme
 * @example
 * Sizes defined as follows:
 * ```json
 * {
 *   sm: '0px' as '0px',
 *   md: '0px' as '0px',
 *   ...
 * }
 * ```
 */
export type ThemeFontSizes = { [fontSize in keyof typeof fontSizes]: number }

/**
 * Type of font weights, based on values defined also in the theme creation
 * @example
 * Weights defined as follows:
 * ```json
 * {
 *   regular: 500 as 500,,
 *   bold: 900 as 900,
 *   ...
 * }
 * ```
 */
export type ThemeFontWeights = { [fontSize in keyof typeof fontWeights]: number }

/**
 * Type of the line heights, based on their values defined
 */
export type ThemeLineHeights = { [fontSize in keyof typeof lineHeights]: number }

/**
 * Type created based on measure units values defineds on theme creation
 * @example
 * Any units as example:
 * - base unit of spacing: 8
 * - header height (mobile): 60
 */
export type ThemeUnits = { [fontSize in keyof typeof units]: number }

/**
 * Type of pre-definitions of paddings (using base unit). Pre-definition also created
 * in initial theme values.
 * @example
 * The padding values are defined using the base unit, that is:
 * ```json
 * {
 *   sm: units.base as 8,
 *   md: (units.base * 2) as 16,
 *   lg: (units.base * 3) as 24,
 *   ...
 * }
 * ```
 */
export type ThemePaddings = { [fontSize in keyof typeof paddings]: number }

/**
 * The final interface of the theme.
 * The union of all types/interfaces created before.
 */
export interface Theme {
  colors: ThemeColors

  fonts: ThemeFonts
  fontSizes: ThemeFontSizes
  fontWeights: ThemeFontWeights
  lineHeights: ThemeLineHeights

  units: ThemeUnits
  paddings: ThemePaddings
}

/**
 * Inject the theme props into a styled component.
 */
export type ThemedProps<P> = ThemedStyledProps<P, Theme>

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
