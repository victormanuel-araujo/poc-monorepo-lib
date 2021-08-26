// utils functions to handle theme
import { get, defaultsDeep } from 'lodash'
import { Platform } from 'react-native'
import { css } from 'styled-components/native'

import { theme as _theme } from './theme'
import {
  Theme,
  ThemeColorsName,
  ThemeColorsShade,
  ThemeFontWeights,
  ThemeFontSizes,
  ThemePaddings,
  ThemeProps,
  ThemeFonts,
} from './theme.types'

/**
 * This function create an theme object.
 * Optionally, you can pass an custom theme object with custom values and it will
 * always be merged with the default theme (smash)
 *
 * @param theme - custom theme
 *
 * @example
 * ```ts
 * const theme_a = { a: 1, b: 2, c: 3 };
 * const theme_b = { a: 2 };
 *
 * const theme_c = createTheme(theme_a, theme_b);
 *
 * // the output (theme_c) is equal to:
 * // theme_c = { a: 2, b: 2, c: 3 };
 * ```
 */
export const createTheme = (theme?: DeepPartial<Theme>): Theme => {
  return defaultsDeep(theme, _theme)
}

/**
 * easy way to get an theme color with a shade and optionally an alpha channel
 *
 * @param colorName - the name of the color
 * @param colorShade - the shade of the color
 * @param alpha - an alpha value in hexadecimal pattern, that is: two character from '00' to 'FF'
 *
 * @example
 * ```ts
 * inside a styled-component
 * ${getThemeColor(...props)}
 *
 * outside a styled-component
 * getThemeColor(...props)({ theme })
 * ```
 */
export const getThemeColor =
  (colorName: ThemeColorsName, colorShade: keyof ThemeColorsShade = 'base', alpha?: string) =>
  ({ theme }): string => {
    const color = get(theme, ['colors', colorName], { base: '#000000' })
    const shade: string = get(color, [colorShade], color.base)

    return alpha && alpha.length === 2 ? `${shade}${alpha}` : shade
  }

/**
 * Get the style of a font weight.
 * Verify the platform where the component is used, and return te correct style
 * to apply the font weight
 *
 * @param weight - Font weight, ie light, regular, bold, etc.
 * @param family - Font family - only used on Android
 *
 * @example
 * ```ts
 * const Bold = styled.Text`
 *   ${getFontWeight('bold')}
 * `
 * ```
 */
export const getFontWeight =
  (weight: keyof ThemeFontWeights, family: keyof ThemeFonts = 'default') =>
  ({ theme }) => {
    /*
     * In android, is necessary to change the font family too, cause the
     * font-weight property not work correctly
     */
    if (Platform.OS === 'android') {
      /* get the font family based on "family" prop  */
      const fontFamily: string = get(theme, ['fonts', family])

      /* return the style, with font-family and font-weight defined correctly */
      return css`
        font-family: ${fontFamily}-${weight};
        font-weight: ${get(theme, ['fontWeights', weight])};
      `
    }

    /*
     * In another platforms, as IOS or Web, is not necessary to set a new font family
     * so,
     */
    return css`
      font-weight: ${theme.fontWeights[weight]};
    `
  }

/**
 * Get the correct style for a font size.
 * return a style, with the font size and the relative line-height.
 *
 * @param size - Font size name, ie sm, md, lg, etc.
 * @param rawValue - If it's true, returns the raw integer value
 *                   instead of a style.
 *
 * @example
 * ```ts
 * const Title = styled.Text`
 *   ${getFontSize('lg')};
 * `
 * ```
 *
 * @example - `theme` comes from styled-component's ThemeContext.
 * ```tsx
 *   return <Icon size={getFontSize('lg', true)({ theme })} />
 * ```
 */
export const getFontSize =
  (size: keyof ThemeFontSizes, rawValue = false) =>
  ({ theme }: ThemeProps<Theme>) => {
    if (rawValue) {
      return get(theme, ['fontSizes', size])
    }

    return css`
      font-size: ${get(theme, ['fontSizes', size])}px;
      line-height: ${get(theme, ['lineHeights', size])}px;
    `
  }

/**
 * Used to get a style of a font family and verify the platform where the
 * component is used, and return te correct style
 * to apply the font family
 *
 * @param family - the name of the family
 * @param weight - optionally an weight of the family. use it only in android
 *
 * *
 * @example
 * ```ts
 * const TitleFamily = styled.Text`
 *   ${getFontFamily('title')}
 * `
 * ```
 */
export const getFontFamily =
  (family: keyof ThemeFonts = 'default', weight: keyof ThemeFontWeights = 'medium') =>
  ({ theme }: ThemeProps<Theme>) => {
    /* get the font family based on "family" prop  */
    const fontFamily: string = get(theme, ['fonts', family])

    if (Platform.OS === 'android') {
      /* return the style, with font-family defined correctly */
      return css`
        font-family: ${fontFamily}-${weight};
      `
    }

    return css`
      font-family: ${fontFamily};
    `
  }

/**
 * Get a named padding from current theme.
 *
 * @param size - Padding size name, ie sm, md, lg, etc.
 * @param multiply - used if is necessary to multiply the padding value
 *
 * @example
 * ```ts
 * const Container = styled.View`
 *   padding: ${getPadding('md')} ${getPadding('lg')};
 * `
 * ```
 */
export const getPadding =
  (size: keyof ThemePaddings, multiply = 1) =>
  ({ theme }: ThemeProps<Theme>): string => {
    return theme.paddings[size] * multiply + 'px'
  }
