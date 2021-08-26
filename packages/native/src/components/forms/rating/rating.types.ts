import { MaterialIconType } from '@components'
import { ThemeColorsName } from '@theme'

export interface RatingProps {
  /**
   * The highest possible rating value,
   * which reflects the number of rendered assessment buttons
   *
   * @default 5
   */
  maxRatingValue?: number

  /**
   * Define an initial value to the input
   *
   * Default is `0`
   */
  value?: number

  /**
   * Enable and Disable the rating editing.
   * If it is `true`, the value of the rating component cannot be clicked
   *
   * Default is `false`
   */
  disabled?: boolean

  /**
   * Callback that is called when the rating changes.
   */
  onChange?: (newValue: number) => void

  /**
   * Controls whether the number of reviewers should appear or not.
   * If 'true' the number entered through the props 'numberOfEvaluators' will be displayed in parentheses to the right of the last icon.
   */
  showTotalOfEvaluators?: boolean

  /**
   * Number that will be displayed in parentheses to the right of the last icon.
   */
  totalOfEvaluators?: number

  /**
   * Icons size in px
   */
  iconSize?: number
  /**
   * Material icon name to render as empty value icon
   */
  emptyIconName?: MaterialIconType
  /**
   *  Material icon name to render as half value icon
   */
  halfIconName?: MaterialIconType
  /**
   * Material icon name to render as rated value icon
   */
  fullIconName?: MaterialIconType
  /**
   * Color of the icons
   */
  iconColor?: ThemeColorsName
  /**
   * Background color of the icons
   */
  backgroundColor?: ThemeColorsName
}
