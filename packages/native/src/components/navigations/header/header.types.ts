import { TextAlignment, TextProps, ViewProps } from '@components'
import { ThemeColors, ThemeColorsGroup, ThemeColorsName, ThemeColorsShade } from '@theme'

/**
 * the fully interface of the header component props
 */
export interface HeaderProps {
  /**
   * The title of the header.
   * The text that is placed in the center of the header.
   */
  title?: TextProps['children']

  /**
   * Define the alignment of the text title.
   *
   * @default `center`
   */
  titleAlignment?: TextAlignment

  /**
   * If you need to override the default props of the title, you can set all of the
   * Text Props in here, and it will be placed at the title text component
   *
   * @see TextProps
   */
  titleProps?: Omit<TextProps, 'children'>

  /**
   * Define a component to be rendered at the right of the header, after the title
   * It can be any JSX element
   */
  rightAdornment?: JSX.Element

  /**
   * The `RightAdornment` are placed inside a `View` component. If you need to pass
   * some props to that view, just define it in here.
   *
   * @see ViewProps
   */
  rightAdornmentProps?: Omit<ViewProps, 'children'>

  /**
   * Define a component to be rendered at the left of the header, before the title
   * It can be any JSX element
   */
  leftAdornment?: JSX.Element

  /**
   * The `LeftAdornment` are placed inside a `View` component. If you need to pass
   * some props to that view, just define it in here.
   *
   * @see ViewProps
   */
  leftAdornmentProps?: Omit<ViewProps, 'children'>

  /**
   * Define a function to be called when the user press the left adornment.
   */
  leftAction?(): void

  /**
   * Define a function to be called when the user press the right adornment.
   */
  rightAction?(): void

  /**
   * backgroundColor control the color of header
   *
   * @default `white`
   */
  backgroundColor?: ThemeColorsName

  /**
   * textColor control the text color of header
   *
   * @default `black`
   */
  textColor?: ThemeColorsName

  /**
   * backgroundShade control the shade of background color
   *
   * @default `base`
   */
  backgroundShade?: keyof ThemeColorsShade
}
