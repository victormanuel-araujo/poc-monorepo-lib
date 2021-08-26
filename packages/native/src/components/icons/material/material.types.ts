import { ThemeColorsName, ThemeColorsShade, ThemePaddings } from '@theme'
import { TextProps } from 'react-native'

import { MaterialIconType } from './material.union-types'

export type IconShape = 'round' | 'round-square' | 'none'

export interface MaterialIconProps extends TextProps {
  /**
   * Icon name.
   *
   * Can be one of the 1562 available icons.
   */
  icon: MaterialIconType

  /**
   * Any valid Gama Smash theme color.
   *
   * @default `black`.
   */
  color?: ThemeColorsName

  /**
   * The color shade.
   *
   * @default `base`.
   */
  shade?: keyof ThemeColorsShade

  /**
   * The size in pixels of the icon.
   *
   * @default 24.
   */
  size?: number

  /**
   * Padding size alias.
   *
   * @default sm
   */
  padding?: keyof ThemePaddings

  /**
   * The icon container shape.
   *
   * Can be none, rounded and a squared with rounded corners.
   */
  shape?: IconShape

  /**
   * The background color of the icon container.
   */
  background?: ThemeColorsName

  /**
   * The border color of the icon container.
   *
   * Should be set with a background in order to work properly.
   */
  border?: ThemeColorsName

  /**
   * Define a custom width to the icon wrapper shape
   */
  width?: number

  /**
   * Define a custom height to the icon wrapper shape
   */
  height?: number
}

export * from './material.union-types'
