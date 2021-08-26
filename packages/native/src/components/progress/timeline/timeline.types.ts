import { MaterialIconType, ViewProps, TextProps } from '@components'

export interface TimelineItemProps extends Omit<ViewProps, 'children'> {
  /**
   * The text children, the same as `Text` own children.
   */
  children: TextProps['children']

  /**
   * Material icon to be used.
   *
   * @see {Icon.Material}
   */
  icon: MaterialIconType

  /**
   * How the text is rendered to give it different meanings.
   *
   * * `line-through` puts a line through text decoration;
   * * `emphasis` renders the text with a bold weight;
   * * `regular` adds no effect to the text.
   *
   * @default `regular`
   */
  type?: 'line-through' | 'emphasis' | 'regular'

  /**
   * Determines a specific number of lines to the text render it
   */
  numberOfLines?: TextProps['numberOfLines']
}

/**
 * The `TimelineItemInnerProps` is to allow TypeScript to recognize that the attributes inside exists, but will only used
 * internally, so the client will never see these props
 */
export interface TimelineItemInnerProps extends TimelineItemProps {
  /**
   * Determines to the timeline item if it is the first element to be rendered
   */
  first: boolean

  /**
   * Determines to the timeline item if it is the last element to be rendered
   */
  last: boolean
}

export type TimelineItemComponent = React.FC<TimelineItemProps>

export interface TimelineProps extends ViewProps {}
export interface TimelineComponent extends React.FC<TimelineProps> {
  Item: TimelineItemComponent
}
