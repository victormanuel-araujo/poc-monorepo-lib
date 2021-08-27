import { ThemeColorsGroup } from './theme.types'

/**
 * ** IMPORTANT **
 * Remember to always use the literal type in each value, this is because, during
 * the autocomplete, the majority of IDEs can show the value of de property on this ways.
 * If this is not defined, the IDE will show the type of property as string/number
 *
 * see an example:
 * - with literal type:
 *  https://i.imgur.com/n7piYD9.png
 *
 * - without literal type:
 * https://i.imgur.com/JZ9rcI8.png
 */

/**
 * Define the colors of theme
 * to add a new color in theme, remember to add the color name at ThemeColorsName
 * the shades are defined in ThemeColorsShade, remember: the base shade is the
 * only one needed
 */
export const colors: ThemeColorsGroup = {
  primary: {
    base: '#FF8C00' as '#FF8C00',
  },
  secondary: {
    base: '#7D38DB' as '#7D38DB',
  },
  black: {
    base: '#000000' as '#000000',
    light: '#202020' as '#202020',
    lighter: '#323232' as '#323232',
  },
  white: {
    base: '#FFFFFF' as '#FFFFFF',
  },
  gray: {
    base: '#9A9A9A' as '#9A9A9A',
    dark: '#888888' as '#888888',
    light: '#DADADA' as '#DADADA',
    lighter: '#E0E0E0' as '#E0E0E0',
  },
  red: {
    base: '#DB4446' as '#DB4446',
  },
  transparent: {
    base: '#00000000',
  },
  yellow: {
    base: '#FFBC11',
  },
}

/**
 * Define the name of the fonts families
 */
export const fonts = {
  /**
   * Used in common text elements
   */
  default: 'Raleway' as 'Raleway',
  /**
   * Used in Titles of sections, headers and etc.
   */
  title: 'Raleway' as 'Raleway',
}

/**
 * Define the fonts sizes
 * this values will be used as pixels (px)
 */
export const fontSizes = {
  xsm: 8 as 8,
  sm: 12 as 12,
  md: 16 as 16,
  lg: 24 as 24,
}

/**
 * Define the line heights for each font size.
 * IMPORTANT: these values will be used with the fontsSizes, so you must make sure
 * that: the values are sync as in the example
 *
 * in short, if an text element use the "md" of fontSizes, it must use the "md"
 * of lineHeights too
 *
 * @example
 * ```ts
 * styled.Text`
 *    font-size: ${fontSizes.md}
 *    line-height: ${fontSizes.md}
 * `
 * ```
 */
export const lineHeights = {
  xsm: 12 as 12,
  sm: 18 as 18,
  md: 24 as 24,
  lg: 36 as 36,
}

/**
 * Define the fonts weights
 */
export const fontWeights = {
  regular: 400 as 400,
  medium: 500 as 500,
  bold: 700 as 700,
  black: 900 as 900,
}

/**
 * Define the measure units of the theme
 * any values can be defined here, these values will be used as global within
 * the theme
 *
 * @example
 * ```ts
 * const units = {
 *   base: 8 (measure base)
 *   header: 60 (header height)
 *   navigation: 70 (navigation - tabstack - height)
 * }
 * ```
 */
export const units = {
  base: 8 as 8,
  header: 60 as 60,
  radius: 8 as 8,
}

/**
 * define the value of different sizes of padding
 * remember to always use the unit base defined before.
 */
export const paddings = {
  sm: units.base,
  md: (units.base * 2) as 16,
  lg: (units.base * 3) as 24,
  xl: (units.base * 4) as 32,
  xxl: (units.base * 5) as 40,
}
