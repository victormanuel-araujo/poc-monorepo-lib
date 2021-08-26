import React from 'react'

import { Timeline, TimelineProps, View } from '@components'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Progress/Timeline',
  component: Timeline,
} as Meta

const Template: Story<TimelineProps> = (args) => <Timeline {...args} />
const SpacedTemplate: Story<TimelineProps> = (args) => (
  <View width={360}>
    <Timeline {...args} paddingBottom={0} paddingTop={0} spacing="sm" style={{ borderWidth: 1 }} />
  </View>
)

export const Default = Template.bind({})
Default.args = {
  children: [
    <Timeline.Item icon="play-arrow" type="line-through">
      Lorem Ipsum Dolor
    </Timeline.Item>,
    <Timeline.Item icon="play-arrow" type="emphasis">
      Lorem Ipsum Dolor
    </Timeline.Item>,
    <Timeline.Item icon="rule">Lorem Ipsum Dolor</Timeline.Item>,
  ],
}

export const MultilineItem = SpacedTemplate.bind({})
MultilineItem.args = {
  children: [
    <Timeline.Item icon="play-arrow" type="line-through">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis enim, finibus ac orci vel, egestas finibus
      elit. Vestibulum ultricies urna a enim tempor sagittis at a erat.
    </Timeline.Item>,
    <Timeline.Item icon="play-arrow" type="emphasis">
      Lorem Ipsum Dolor
    </Timeline.Item>,
    <Timeline.Item icon="rule">Lorem Ipsum Dolor</Timeline.Item>,
  ],
}

export const EllipśisMultilineItem = SpacedTemplate.bind({})
EllipśisMultilineItem.args = {
  children: [
    <Timeline.Item icon="play-arrow" type="line-through" numberOfLines={2}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis enim, finibus ac orci vel, egestas finibus
      elit. Vestibulum ultricies urna a enim tempor sagittis at a erat.
    </Timeline.Item>,
    <Timeline.Item icon="play-arrow" type="emphasis">
      Lorem Ipsum Dolor
    </Timeline.Item>,
    <Timeline.Item icon="rule">Lorem Ipsum Dolor</Timeline.Item>,
  ],
}
