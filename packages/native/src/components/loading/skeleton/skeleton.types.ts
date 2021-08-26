import { ThemeColorsName, ThemeColorsShade } from '@theme'

export interface SkeletonProps {
  /**
   * The height to be applied on the skeleton component.
   * when used as string, the script will be consider as a percentage value.
   * when used as number, the script will use it as a pixel value.
   *
   * default is `undefined` - but the default height is `auto`
   */
  height: string | number
  /**
   * The width to be applied on the skeleton component.
   * when used as string, the script will be consider as a percentage value.
   * when used as number, the script will use it as a pixel value.
   *
   * @default `100%`
   */
  width?: string | number

  /**
   * Determines the background color of the skeleton component.
   * @default `gray`
   */
  backgroundColor?: ThemeColorsName
  /**
   * Determines the background shade of the skeleton component.
   * @default `lighter`
   */
  backgroundShade?: keyof ThemeColorsShade

  /**
   * Determines the highlight color of the skeleton component.
   * @default `white`
   */
  highlightColor?: ThemeColorsName
  /**
   * Determines the highlight shade of the skeleton component.
   * @default `base`
   */
  highlightShade?: keyof ThemeColorsShade

  /**
   * Determine a custom border radius to skeleton component
   * @default `0`
   */
  customBorderRadius?: number

  /**
   * Determines the animation speed in milliseconds. Use 0 to disable animation
   * @default `900`
   */
  speed?: number

  /**
   * Determines the animation direction, left to right or right to left
   * @default `ltr`
   */
  direction?: 'ltr' | 'rtl'
}
