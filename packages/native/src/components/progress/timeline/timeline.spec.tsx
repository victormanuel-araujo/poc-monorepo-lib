import React from 'react'

import { Timeline } from '@components'

import { renderWithTheme } from '../../../theme/theme.fixture'

describe('Timeline', () => {
  it('should render correctly', () => {
    const component = renderWithTheme(
      <Timeline>
        <Timeline.Item icon="play-arrow" type="line-through">
          Lorem Ipsum Dolor
        </Timeline.Item>
        <Timeline.Item icon="play-arrow" type="emphasis">
          Lorem Ipsum Dolor
        </Timeline.Item>
        <Timeline.Item icon="rule">Lorem Ipsum Dolor</Timeline.Item>
      </Timeline>
    )

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should not allow to have an empty timeline', () => {
    /* Directly rendering Timeline gives a gigantic stack trace,
       which is kind of correct but we want to capture the exception
       to check if that's working. For now let's just directly call
       it here to make sure the behavior works. */
    expect(() => Timeline({})).toThrow(/timeline component cant be empty/i)
  })

  it('should not render all text when numberOfLines is 1', async () => {
    const component = renderWithTheme(
      <Timeline width={260}>
        <Timeline.Item icon="play-arrow" type="line-through" numberOfLines={1} testID="timeline-item-one-line">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis enim, finibus ac orci vel, egestas finibus
          elit. Vestibulum ultricies urna a enim tempor sagittis at a erat.
        </Timeline.Item>
        <Timeline.Item icon="rule">Lorem Ipsum Dolor</Timeline.Item>
      </Timeline>
    )

    expect(component.findByTestId('timeline-item-one-line')).toEqual(
      expect.not.stringContaining('Vestibulum ultricies urna a enim tempor sagittis at a erat.')
    )
  })
})
