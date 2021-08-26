import { ThemeColorsGroup } from './theme.types';
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
export declare const colors: ThemeColorsGroup;
/**
 * Define the name of the fonts families
 */
export declare const fonts: {
    /**
     * Used in common text elements
     */
    default: "Raleway";
    /**
     * Used in Titles of sections, headers and etc.
     */
    title: "Raleway";
};
/**
 * Define the fonts sizes
 * this values will be used as pixels (px)
 */
export declare const fontSizes: {
    xsm: 8;
    sm: 12;
    md: 16;
    lg: 24;
};
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
export declare const lineHeights: {
    xsm: 12;
    sm: 18;
    md: 24;
    lg: 36;
};
/**
 * Define the fonts weights
 */
export declare const fontWeights: {
    regular: 400;
    medium: 500;
    bold: 700;
    black: 900;
};
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
export declare const units: {
    base: 8;
    header: 60;
    radius: 8;
};
/**
 * define the value of different sizes of padding
 * remember to always use the unit base defined before.
 */
export declare const paddings: {
    sm: 8;
    md: 16;
    lg: 24;
    xl: 32;
    xxl: 40;
};
