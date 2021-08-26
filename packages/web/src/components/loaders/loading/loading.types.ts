import { ThemeColorsName } from '@theme'

export interface LoadingProps {
  /**
   * The size of loading component
   *
   * @default `36`
   */
  size: number

  /**
   * Set the component to be fluid when it respects it's parent width and height
   *
   * @default `false`
   */
  fluid?: boolean

  /**
   * The loading color
   *
   * @default `primary`
   */
  color: ThemeColorsName
}
