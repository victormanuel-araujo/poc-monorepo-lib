import { ReactChild } from 'react'

import { ThemeColorsName, ThemeColorsShade } from '@theme'
import { TouchableOpacityProps } from 'react-native'

export type ButtonType = 'primary' | 'secondary' | 'flat'

export type ButtonSize = 'small' | 'large'

/**
 * The entire interface of the button props
 */
export interface ButtonProps extends TouchableOpacityProps {
  /**
   * General button appearance (color, border, outline, etc).
   *
   * @default `primary`.
   */
  type?: ButtonType

  /**
   * The background color of the button
   *
   * default is based on 'type' prop
   */
  color?: ThemeColorsName

  /**
   * The background color shade of the button
   *
   * default is based on 'type' prop
   */
  shade?: keyof ThemeColorsShade

  /**
   * Button size.
   *
   * @default `small`.
   */
  size?: ButtonSize

  /**
   * Replaces the text label with a loading spinning icon.
   */
  loading?: boolean

  /**
   * Define if the button must to contain 100% of the width
   */
  fluid?: boolean

  /**
   * Disables the button
   *
   * Overrides primary and secondary.
   */
  disabled?: boolean

  /**
   * Button text label or a component child
   */
  children: string | ReactChild

  /**
   * Used to pass the text props from button component, to text component
   */
  textProps?: any

  /**
   * Set a custom border width to the button
   */
  borderWidth?: number

  /**
   * Define a custom border color the button
   */
  borderColor?: ThemeColorsName

  /**
   * Customize the shade of the custom border color
   */
  borderShade?: keyof ThemeColorsShade
}
