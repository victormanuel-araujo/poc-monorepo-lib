import { ThemeColorsName } from '@theme'
import { SvgProps } from 'react-native-svg'

export interface PlaylistIconProps extends SvgProps {
  /**
   * The background circle color.
   *
   * @default black
   */
  background?: ThemeColorsName

  /**
   * The up arrow fill color.
   *
   * @default white
   */
  upArrow?: ThemeColorsName

  /**
   * The down arrow fill color.
   *
   * @default white
   */
  downArrow?: ThemeColorsName

  /**
   * Icon size (height and width)
   *
   * @default 24
   */
  size?: number
}
