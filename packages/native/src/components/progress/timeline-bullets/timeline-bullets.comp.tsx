import * as React from 'react'

import { View } from '@components'
import { Theme } from '@theme'
import { ThemeContext } from 'styled-components/native'

import { BulletConnector, BulletDot } from './timeline-bullets.styles'
import { TimelineBulletsProps } from './timeline-bullets.types'
/**
 * The `TimelineBullets` is a visual navigation component that show to user the quantity
 * of elements in a timeline and the current element.
 */
export const TimelineBullets: React.FC<TimelineBulletsProps> = ({
  activeIndex,
  color,
  highlightColor,
  size,
  paddingY,
  ...props
}) => {
  const theme: Theme = React.useContext(ThemeContext)
  const timelinePaddingValue = theme.paddings[paddingY]

  const children = React.Children.toArray(props.children)
  return (
    <View dir="column" width="auto" paddingTop={timelinePaddingValue} paddingBottom={timelinePaddingValue} {...props}>
      {children.map((child: JSX.Element, key) => {
        const first = key === 0
        const last = key === children.length - 1

        return (
          <View dir="row" key={key}>
            <View justifyContent="center" alignment="center" width={size * 1.5} paddingRight={theme.paddings.md}>
              <BulletConnector transparent={first} />
              <BulletDot
                size={size}
                highlightColor={highlightColor}
                color={color}
                isActive={key === activeIndex}
                testID="timeline-bullet"
              />
              <BulletConnector transparent={last} />
            </View>
            <View flex={1} justifyContent="center">
              {child}
            </View>
          </View>
        )
      })}
    </View>
  )
}

TimelineBullets.defaultProps = {
  size: 8,
  color: 'white',
  highlightColor: 'secondary',
}
