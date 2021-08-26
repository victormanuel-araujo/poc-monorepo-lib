import { ThemeColorsName, ThemeColorsShade, ThemePaddings } from '@theme'
import { FlexStyle, ViewProps as RNViewProps } from 'react-native'

/**
 * The possible values to the `display` prop
 */
export type ViewDisplay = 'flex' | 'none'

/**
 * The possible values to the `direction` prop
 */
export type ViewDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'

/**
 * The possible values to the `position` prop
 */
export type ViewPosition = 'relative' | 'absolute' | 'fixed'

/**
 * The composition of the View Props Interface
 */
export interface ViewProps extends RNViewProps {
  /**
   * Apply the paddings into four corners of the view, based on the paddings presets
   * defined in theme creation
   *
   * default is `undefined`
   */
  spacing?: keyof ThemePaddings

  /**
   * Override the spacing values, using custom multiplier to multiply the unit base
   * defined by the theme.
   *
   * default is `undefined`
   */
  customMultiplier?: number

  /**
   * Define a background to the view, using the theme color name
   *
   * default is `undefined`
   */
  background?: ThemeColorsName

  /**
   * Define a background color with a custom shade
   *
   * default is `base`
   */
  backgroundShade?: keyof ThemeColorsShade

  /**
   * Override the padding-right style
   *
   * default value is `undefined`
   */
  paddingRight?: number

  /**
   * Override the padding-bottom style
   *
   * default value is `undefined`
   */
  paddingBottom?: number

  /**
   * Override the padding-left style
   *
   * default value is `undefined`
   */
  paddingLeft?: number

  /**
   * Override the padding-top style
   *
   * default value is `undefined`
   */
  paddingTop?: number

  /**
   * Apply a custom display to the View. as "flex" or "none"
   *
   * default value is `flex`
   */
  display?: ViewDisplay

  /**
   * This value only works in web client. Define the "flex" style to control the
   * width of the View
   *
   * default is `undefined`
   */
  flex?: number

  /**
   * Override the width of the view. This value can be used as an number, or a string
   * when used as string, the script will be consider as a percentage value.
   * when used as number, the script will use it as a pixel value.
   *
   * default is `undefined` - but the default width of the view is `100%`
   */
  width?: string | number

  /**
   * View position in relation to the other components of the screen.
   *
   * default value is `relative`
   */
  position?: ViewPosition

  /**
   * The direction of the childrens of the view, in flex display pattern
   *
   * default value is `column`
   */
  dir?: ViewDirection

  /**
   * The alignment of the childrens of the view.
   * When display direction is "row", this will control the horizontal alignment.
   * When display direction is "column", this will control the vertical alignment.
   *
   * default value is `undefined`
   */
  alignment?: FlexStyle['alignItems']

  /**
   * The justify content of the childrens of the view.
   * When display direction is "row", this will control the vertical alignment.
   * When display direction is "column", this will control the horizontal alignment.
   *
   * default value is `undefined`
   */
  justifyContent?: FlexStyle['justifyContent']

  /**
   * the children of the view.
   */
  children?: JSX.Element[] | JSX.Element
}
