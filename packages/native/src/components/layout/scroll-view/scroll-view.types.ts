import { ViewProps } from '@components'
import { ThemeColorsName, ThemeColorsShade } from '@theme'
import { ViewProps as RNViewProps, ScrollViewProps as RNScrollViewProps } from 'react-native'

type OnlyOurViewProps = Omit<ViewProps, keyof RNViewProps>

/**
 * @see {ViewProps}
 */
export type ScrollViewProps = {
  /**
   * Define a background color to the scroll view
   *
   * @default `white`
   */
  backgroundColor?: ThemeColorsName

  /**
   * Custom the shade of the background color.
   *
   * @default `base`
   */
  backgroundColorShade?: keyof ThemeColorsShade
} & OnlyOurViewProps &
  RNScrollViewProps
