import { TextProps } from '@components'
import { ThemeColorsName, ThemeColorsShade, ThemePaddings } from '@theme'

export interface CheckboxProps {
  /**
   * The label of the checkbox.
   * The text label that is placed in the checkbox.
   *
   */
  label: TextProps['children']

  /**
   * Fluid define the width of the checkbox. If the fluid is set to true, the
   * checkbox will occupy 100% of the father component.
   *
   * @default true
   */
  fluid?: boolean

  /**
   * Spacing define the checkbox padding.
   *
   * @default "md"
   */
  spacing?: keyof ThemePaddings

  /**
   * Define the border color when checked.
   *
   * @default "black"
   */
  checkedBorderColor?: ThemeColorsName

  /**
   * Define the border color shade when the checkbox is checked.
   *
   * @default "base"
   */
  checkedBorderColorShade?: keyof ThemeColorsShade

  /**
   * Define the border color when the checkbox is not checked.
   *
   * @default "black"
   */
  uncheckedBorderColor?: ThemeColorsName

  /**
   * Define the border color shade when the checkbox is not checked.
   *
   * @default "base"
   */
  uncheckedBorderColorShade?: keyof ThemeColorsShade

  /**
   * Define the distance between the input and its shadow, the higher, the farther
   * the input will fluctuate
   *
   * @default 7
   */
  offset?: number

  /**
   * Define the color of the checkbox background when is checked, using the color names
   *
   * @default "secondary"
   */
  checkedBackgroundColor?: ThemeColorsName

  /**
   * Define the color of the checkbox background when is checked, using the color shade.
   *
   * @default "base"
   */
  checkedBackgroundColorShade?: keyof ThemeColorsShade

  /**
   * Define the color of the checkbox shadow when isn't checked, using the color names
   *
   * @default "white"
   */
  uncheckedBackgroundColor?: ThemeColorsName

  /**
   * Define the color of the checkbox shadow when isn't checked, using the theme color shade.
   *
   * @default "base"
   */
  uncheckedBackgroundColorShade?: keyof ThemeColorsShade

  /**
   * Define the color of the label checkbox when its checked, using theme colors name.
   *
   * @default "black"
   */
  checkedLabelColor?: ThemeColorsName

  /**
   * Define the color shade of the label checkbox when its checked, using theme colors shade.
   *
   * @default "base"
   */
  checkedLabelColorShade?: keyof ThemeColorsShade

  /**
   * Define the color of the label checkbox when isn't checked, using theme colors name.
   *
   * @default "black"
   */
  uncheckedLabelColor?: ThemeColorsName

  /**
   * Define the color of the label checkbox when isn't checked using theme colors shade.
   *
   * @default "base"
   */
  uncheckedLabelColorShade?: keyof ThemeColorsShade

  /**
   * The value of the checkbox.
   *
   * The value that is set in the checkbox.
   *
   * @default false
   */
  checked?: boolean

  /**
   * Enable and Disable the checkbox. If it is `true`, the value of the checkbox
   * can't be changed
   *
   * @default false
   */
  disabled?: boolean

  /**
   * Trigger an event whenever the user clicks the checkbox.
   *
   * The `checked` state will be true when the user clicks the checkbox and false if it clicks again.
   *
   * @default `undefined`
   */
  onChange?(newValue: boolean): void
}
