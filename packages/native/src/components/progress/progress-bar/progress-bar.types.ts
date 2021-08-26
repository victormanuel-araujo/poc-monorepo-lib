import { TextProps, ViewProps } from '@components'
import { ThemeColorsName, ThemeColorsShade } from '@theme'

export interface ProgressBarProps extends Omit<ViewProps, 'children'> {
  /**
   * The value is the current progress, and will be used to calc with the `max`
   * prop to get the real percentage
   *
   * @example
   * ```typescript
   *  const value = 40
   *  const max = 50
   *
   *  const percentage = (value * 100) / max // 80%
   * ```
   */
  value?: number

  /**
   * Max is the number that represents 100% of the progress.
   */
  max?: number

  /**
   * Define if the percentage label must show or not
   *
   * @default `true`
   */
  showPercentage?: boolean

  /**
   * If you need to customize the percentage label, you can pass all of the
   * `TextProps` to it.
   *
   * @see TextProps
   */
  percentageTextProps?: Omit<TextProps, 'children'>

  /**
   * Define which side of the progress bar the percentage label will appear
   *
   * @default `left`
   */
  percentageSide?: 'left' | 'right'

  /**
   * Define the background color of the total indicator of the progress bar
   * (the line in back, who always is visible and in 100% of width)
   *
   * @default `secondary`
   */
  background?: ThemeColorsName

  /**
   * Define the background shade of the total indicator of the progress bar
   *
   * @default `base`
   */
  backgroundShade?: keyof ThemeColorsShade

  /**
   * Define an opacity to the total indicator
   * It doesn't have effect of the Progress Bar Indicator
   *
   * @default `0.5`
   */
  backgroundOpacity?: number

  /**
   * Define a background color to the progress indicator (The bar who change
   * its width based on the `percent` value)
   *
   * @default `white`
   */
  progressBackground?: ThemeColorsName

  /**
   * Define a custom background color shade to the progress indicator.
   *
   * @default `base`
   */
  progressBackgroundShade?: keyof ThemeColorsShade
}
