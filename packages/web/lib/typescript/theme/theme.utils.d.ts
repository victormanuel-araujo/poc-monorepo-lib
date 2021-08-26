import { Theme, ThemeColorsName, ThemeColorsShade, ThemeFontWeights, ThemeFontSizes, ThemePaddings, ThemeProps, ThemeFonts } from './theme.types';
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
export declare const createTheme: (theme?: DeepPartial<Theme>) => Theme;
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
export declare const getThemeColor: (colorName: ThemeColorsName, colorShade?: keyof ThemeColorsShade, alpha?: string) => ({ theme }: {
    theme: any;
}) => string;
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
export declare const getFontWeight: (weight: keyof ThemeFontWeights, family?: keyof ThemeFonts) => ({ theme }: {
    theme: any;
}) => import("styled-components").FlattenSimpleInterpolation;
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
export declare const getFontSize: (size: keyof ThemeFontSizes, rawValue?: boolean) => ({ theme }: ThemeProps<Theme>) => number | import("styled-components").FlattenSimpleInterpolation;
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
export declare const getFontFamily: (family?: keyof ThemeFonts, weight?: keyof ThemeFontWeights) => ({ theme, }: ThemeProps<Theme>) => import("styled-components").FlattenSimpleInterpolation;
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
export declare const getPadding: (size: keyof ThemePaddings, multiply?: number) => ({ theme }: ThemeProps<Theme>) => string;
