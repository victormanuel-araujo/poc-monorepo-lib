import { ViewProps, TextProps } from '@components'
import { ThemeColorsName } from '@theme'

import { CardProps } from '../card'

export interface AccordionProps extends CardProps {
  /**
   * Define the size of title element
   *
   * Default is `md`
   */
  titleProps?: TextProps
  /**
   * Define if Accordion component is open or not
   *
   * Default is `false`
   */
  expanded?: boolean
  /**
   * Title text of Accordion component
   *
   * Default is `empty`
   */
  title?: string
  /**
   * Define the right arrow icon color
   *
   * Default is `black`
   */
  arrowColor?: ThemeColorsName
  /**
   * The children of the card, anything you want to show inside this component
   *
   * Default is `undefined`
   */
  children?: ViewProps['children']
}
