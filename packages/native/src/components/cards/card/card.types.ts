import { ViewProps } from '@components'
import { ThemeColorsName, ThemeColorsShade, ThemePaddings } from '@theme'
import { ViewProps as RNViewProps } from 'react-native'

/**
 * The composition of the CardProps Interface
 */
export interface CardProps extends RNViewProps {
  /**
   * Define the color of the card shadow
   *
   * Default is `primary`
   */
  color?: ThemeColorsName

  /**
   * Define a custom shade to the card shadow
   *
   * Default is `primary`
   */
  shade?: keyof ThemeColorsShade

  /**
   * Define a background color to the inner of the card, it is: the view where
   * the card children are placed
   *
   * Default is `white`
   */
  backgroundColor?: ThemeColorsName

  /**
   * Define a custom shade to the background-color of the card inner
   *
   * Default is `base`
   */
  backgroundShade?: keyof ThemeColorsShade

  /**
   * Control the padding spacing of the card content inner: the view where the
   * card children are placed
   *
   * Default is `sm`
   */
  spacing?: keyof ThemePaddings

  /**
   * Pass the ViewProps to the View inside the Card Component
   *
   * Default is `undefined`
   */
  viewProps?: ViewProps

  /**
   * Control the card shadow opacity
   *
   * Default is `1`
   */
  opacity?: number

  /**
   * Set a custom border with to the card component (the view where the children
   * are placed)
   *
   * default is `1`
   */
  borderWidth?: number

  /**
   * Custom the border color of the inner of card component
   *
   * Default is `black`
   */
  borderColor?: ThemeColorsName

  /**
   * Custom the border color shade
   *
   * Default is `base`
   */
  borderColorShade?: keyof ThemeColorsShade

  /**
   * Apply a custom border radius to the card, both shadow and content
   *
   * Default is `8` -> as theme pattern
   */
  customBorderRadius?: number

  /**
   * The offset control the distance between the shadow and the card children
   * the bigger, the more distant the shadow will be of the children
   *
   * default is `7
   */
  offset?: number

  /**
   * The children of the card, anything you want to show inside this component
   *
   * Default is `undefined`
   */
  children?: ViewProps['children']
}
