import { ThemeColorsName, ThemePaddings } from '@theme'

export interface TimelineBulletsProps {
  /**
   * The spacing control the padding between each bullet
   *
   * @default `sm`
   */
  spacing?: keyof ThemePaddings

  /**
   * The paddingX control the padding top and bottom
   */
  paddingY?: keyof ThemePaddings

  /**
   * Active is used to control wich bullet is active and must be highlighted.
   *
   * Define here the `index` of the active step, starts in 0
   */
  activeIndex?: number

  /**
   * The `size` define a custom width and height to the bullets.
   *
   * @default 8
   */
  size?: number

  /**
   * Use a Theme Color Name to define a custom color to the bullets
   *
   * @default `white`
   */
  color?: ThemeColorsName

  /**
   * Use a Theme Color Name to define a custom color to the highlighted bullet
   *
   * @default `secondary`
   */
  highlightColor?: ThemeColorsName

  /**
   * The length of the timeline will be defined by the length of the children
   * It can be any type of component
   */
  children?: JSX.Element | JSX.Element[]
}
