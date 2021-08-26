import React from 'react'

import { Icon, View } from '@components'
import { Platform, View as RNView } from 'react-native'

import { ItemLabel, Line, FakeLineDashed, FakeLineDash } from './timeline.styles'
import { TimelineComponent, TimelineItemInnerProps } from './timeline.types'

/**
 * A timeline is a component that shows a sequence of things sorted
 * by time, with visual feedback of what it is.
 *
 * Use `Timeline.Item` to fill a timeline component.
 *
 * @see {TimelineItemProps}
 *
 * @example
 * ```jsx
 * return (
 *  <Timeline>
 *    <Timeline.Item icon="play-arrow" type="dashed">
 *      First this
 *    </Timeline.Item>
 *    <Timeline.Item icon="play-arrow" type="emphasis">
 *      Then This
 *    </Timeline.Item>
 *    <Timeline.Item icon="rule">
 *      Then That
 *    </Timeline.Item>
 *  </Timeline>
 * )
 * ```
 */
export const Timeline: TimelineComponent = ({ children, ...props }) => {
  if (React.Children.count(children) === 0) {
    throw new Error('Timeline component cant be empty')
  }

  /**
   * If the Timeline have a single children, will came as the component object instead of an array of it, so
   * to make the rendering easier, we assure that this will be an array always
   */
  if (children.constructor !== Array) children = [children] as JSX.Element[]

  return (
    <View {...props}>
      <RNView style={{ overflow: 'hidden' }}>
        {children.map((Child: JSX.Element, index: number) =>
          Child.type.displayName === 'Timeline.Item' ? (
            <Child.type
              key={Child.key ?? index}
              {...Child.props}
              first={index === 0}
              last={index === children['length'] - 1}
            />
          ) : (
            <Child.type key={Child.key ?? index} {...Child.props} />
          )
        )}
      </RNView>
    </View>
  )
}

/**
 * An Item is what fills a timeline sequence.
 */
Timeline.Item = ({ icon, type, children, numberOfLines, ...props }: TimelineItemInnerProps) => {
  const textStyle = Platform.OS !== 'web' ? { transform: [{ translateY: -1 }] } : { flex: 1 }

  return (
    <View
      {...props}
      paddingTop={props.first ? props.paddingTop || 0 + 4 : props.paddingTop}
      paddingBottom={props.last ? props.paddingBottom || 0 + 4 : props.paddingBottom}
    >
      <Line location="start" />

      <View dir="row" spacing="sm" paddingLeft={0} paddingRight={0} alignment="center">
        <View width="auto" style={{ overflow: 'hidden' }}>
          <Icon.Material size={20} icon={icon} padding="sm" color="black" border="black" background="white" />
        </View>

        <ItemLabel
          style={textStyle}
          numberOfLines={numberOfLines}
          weight={type === 'emphasis' ? 'bold' : 'regular'}
          decoration={type === 'line-through' ? 'line-through' : null}
        >
          {children}
        </ItemLabel>
      </View>

      {props.last ? (
        <FakeLineDashed>
          <FakeLineDash />
          <FakeLineDash />
          <FakeLineDash />
        </FakeLineDashed>
      ) : (
        <Line location="end" />
      )}
    </View>
  )
}

Timeline.Item.displayName = 'Timeline.Item'
