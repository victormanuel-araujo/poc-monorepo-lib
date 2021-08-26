import * as React from 'react'

import { TimelineBullets, View, Text } from '@components'

import { renderWithTheme } from '../../../theme/theme.fixture'

describe('Timeline Bullets Component', () => {
  it('should render correctly', () => {
    const component = renderWithTheme(
      <TimelineBullets spacing="md" size={8} activeIndex={1}>
        <View>
          <Text>Dot 1</Text>
        </View>
        <View>
          <Text>Dot 2</Text>
        </View>
        <View>
          <Text>Dot 3</Text>
        </View>
      </TimelineBullets>
    )

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should have the correct count of bullets', () => {
    const component = renderWithTheme(
      <TimelineBullets spacing="md" size={8} activeIndex={1}>
        <View>
          <Text>Dot 1</Text>
        </View>
        <View>
          <Text>Dot 2</Text>
        </View>
        <View>
          <Text>Dot 3</Text>
        </View>
        <View>
          <Text>Dot 4</Text>
        </View>
      </TimelineBullets>
    )
    const bullets = component.queryAllByTestId('timeline-bullet')

    expect(bullets).toHaveLength(4)
  })
})
