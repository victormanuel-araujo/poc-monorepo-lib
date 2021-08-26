import { ThemeColors, ThemeColorsShade } from '@theme'
import { SvgProps } from 'react-native-svg'

export interface ColorProps {
  color?: string

  accentColor?: string
}

export interface StackIconProps extends SvgProps {
  /**
   * The stack name
   *
   * Mandatory, the component is not going to work without a valid stack name.
   */
  stack: 'hacker' | 'hipster' | 'human' | 'hustler' | 'hyper'

  /**
   * Icon size in pixels.
   *
   * @default 50. This icons are usually larger than the others.
   */
  size?: number

  /**
   * The color of the main element of the icon.
   *
   * ie for the hacker stack is a horse.
   *
   * @default 'black'
   */
  color?: keyof ThemeColors

  /**
   * The main element color shade.
   *
   * @default 'light'
   */
  colorShade?: keyof ThemeColorsShade

  /**
   * The color of the background element that contrasts with the main one.
   *
   * This is usually a circle.
   *
   * @default 'primary'
   */
  accentColor?: keyof ThemeColors

  /**
   * The color shade of the background element.
   *
   * @default 'base'
   */
  accentColorShade?: keyof ThemeColorsShade
}
