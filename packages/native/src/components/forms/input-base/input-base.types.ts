import { ViewProps } from '@components'
import { ThemeColorsName, ThemeColorsShade, ThemePaddings } from '@theme'
import { TextInputProps } from 'react-native'

/**
 * Possible types to the Input Base
 */
export type InputBaseTypes = 'text' | 'password' | 'email' | 'tel' | 'textarea'

/**
 * The final composition to the InputBase Props
 */
export interface InputBaseProps extends TextInputProps {
  /**
   * The label of the input. It is shown as an `placeholder`, and stay
   * visible when the input has an value
   *
   * Default is ""
   */
  label?: string

  /**
   * Fluid define the width of the input. If the fluid is set to true, the
   * input will occupy 100% of the father component
   *
   * Default is `true`
   */
  fluid?: boolean

  /**
   * Define a type of the input, and their preset of props
   *
   * Default is `text`
   */
  type?: InputBaseTypes

  /**
   * Define the distance between the input and its shadow, the higher, the farther
   * the input will fluctuate
   *
   * Default is `7`
   */
  offset?: number

  /**
   * Define the horizontal spacing of the input, based on themed paddings
   *
   * Default is `md`
   */
  spacing?: keyof ThemePaddings

  /**
   * Define the color of the input shadow, using the color names
   *
   * Default is `secondary`
   */
  color?: ThemeColorsName

  /**
   * Define the shade of the input shadow color, using the shade name.
   * It only works, if a `color` prop is set
   *
   * Default is `base`
   */
  shade?: keyof ThemeColorsShade

  /**
   * Enable and Disable the input editing. If it is `true`, the value of the input
   * can't be changed
   *
   * Default is `false`
   */
  disabled?: boolean

  /**
   * Define a validation error for the input, if it is set as `true`, the input
   * will receive a error styled to feedback the error to the user
   *
   * Default is `false`
   */
  error?: boolean

  /**
   * Define an initial value to the input
   *
   * Default is `""`
   */
  value?: string

  /**
   * Number of lines basically define the initial height of the input if it is
   * a Textarea type.
   *
   * Obs: it only works in a textarea input.
   *
   * Default is `3`
   */
  numberOfLines?: number

  /**
   * Place some element or component at start of the input. The element will be
   * placed inside a View.
   *
   * Default is `undefined`
   */
  startAdornment?: JSX.Element

  /**
   * Inject a View Props inside the view who wrap the `startAdornment`. It can
   * receive any prop of type `ViewProp`
   *
   * Default is `undefined`
   */
  startAdornmentProps?: ViewProps

  /**
   * Place some element or component at end of the input. The element will be
   * placed inside a View.
   *
   * Default is `undefined`
   */
  endAdornment?: JSX.Element

  /**
   * Inject a View Props inside the view who wrap the `endAdornment`. It can
   * receive any prop of type `ViewProp`
   *
   * Default is `undefined`
   */
  endAdornmentProps?: ViewProps

  /**
   * Trigger a callback always when the `error` in local state of the input undergo
   * a change
   *
   * @param error - if the input has error or not
   */
  onError?(error: boolean): void
}

export type InputBaseStyledProps = {
  focused?: boolean
  withValue?: boolean
}
