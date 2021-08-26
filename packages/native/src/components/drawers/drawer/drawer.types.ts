import { ViewProps } from '@components'
import { ThemeColorsName, ThemeColorsShade } from '@theme'

export type DrawerActions = {
  show(): void
  close(): void
  setContent(content: ViewProps['children'], settings?: DrawerSettings): void
}

export type DrawerSettings = Omit<DrawerProps, 'open' | 'children'>

export interface DrawerProps {
  /**
   * Define if the drawer is visible or not
   *
   * @default `false`
   */
  open?: boolean

  /**
   * Elemento who will be rendered inside the drawer
   */
  children?: ViewProps['children']

  /**
   * title who will be placed at the top of the drawer
   */
  title?: string

  /**
   * Overlay opacity, define the opacity of the backdrop of drawer.
   * It is: The space who is at back of the drawer
   *
   * @default `0.01`
   */
  overlayOpacity?: number

  /**
   * Customize the drawer background color
   *
   * @default `black`
   */
  backgroundColor?: ThemeColorsName

  /**
   * Customize tha drawer background color shade
   *
   * @default `light`
   */
  backgroundColorShade?: keyof ThemeColorsShade

  /**
   * If this prop is defined as `true`, when the user press in the screen, out
   * of the drawer content, the drawer will be closed.
   * If it is `false`, if the user press out of the drawer content, it will
   * keep opened
   *
   * @default `true`
   */
  closeByOverlay?: boolean

  /**
   * If you need, pass all of `ViewProp` to the body of the drawer.
   * The body of the drawer, is placed below of the title and the close action.
   */
  bodyProps?: Omit<ViewProps, 'children'>

  /**
   * The max height define a scroll inside the drawer if the content height
   * overflow the max-height.
   */
  bodyMaxHeight?: number

  /**
   * This function will be called whenever the drawer is closed.
   * It works in the same way that it is closed by closing the title and when
   * closed by pressing the background
   */
  onClose?(): void
}
