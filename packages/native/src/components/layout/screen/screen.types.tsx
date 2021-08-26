import { ThemeColorsName, ThemeColorsShade, ThemePaddings } from '@theme'

export interface ScreenProps {
  /**
   *  background control the color of all screen
   *
   *  default is `white`
   */
  background?: ThemeColorsName

  /**
   * backgroundshade control the shade of background color
   *
   * default is `base`
   */
  backgroundShade?: keyof ThemeColorsShade

  /**
   * Override the spacing values, using custom multiplier to multiply the unit base
   * defined by the theme.
   *
   * default is `undefined`
   */
  spacing?: keyof ThemePaddings

  /**
   * the children of the view.
   */
  children?: JSX.Element[] | JSX.Element
}
