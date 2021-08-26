import { ThemeColorsName, ThemePaddings } from '@theme'

/**
 * The final interface to the Step Indicator props
 */
export interface StepIndicatorProps {
  /**
   * The length define how many dots must be rendered.
   *
   * @example
   * If your flux has four steps, the length must be `4` and the component will
   * render four step dots.
   */
  length: number

  /**
   * Active is used to control de `StepIndicator` by other component. or a
   * third party state.
   *
   * Define here the `index` of the active step
   */
  active?: number

  /**
   * The `size` define a custom width and height to the dots.
   *
   * @default 8
   */
  size?: number

  /**
   * Use a Theme Color Name to define a custom color to the dots of StepIndicator
   *
   * @default `secondary`
   */
  color?: ThemeColorsName

  /**
   * This define the opacity of the dots that are inactive
   *
   * @default 0.24
   */
  inactiveOpacity?: number

  /**
   * Define an entry value to be the initial step of your flux.
   *
   * @example
   * If you need to start some flux at the second step, just define the `startFrom`
   * as `1`.
   * Remember: the index count start at 0
   *
   * @default 0
   */
  startFrom?: number

  /**
   * If Retroactive is defined as true, the steps before of the active step will
   * be filled normally, indicating that already gone through
   *
   * @default false
   */
  retroactive?: boolean

  /**
   * The spacing control the padding between each step dot
   *
   * @default `sm`
   */
  spacing?: keyof ThemePaddings

  /**
   * If you lock forward, the user cannot click on a dot greater than the
   * activated one
   *
   * @default `false`
   */
  lockForward?: boolean

  /**
   * A function to handle always when the user press some step dot.
   *
   * @param index - index of the pressed dot
   */
  onPress?(index: number): void

  /**
   * A function to handle always when the active step change it value
   *
   * @param newIndex - the index of the new active step
   */
  onChange?(newIndex: number): void
}
