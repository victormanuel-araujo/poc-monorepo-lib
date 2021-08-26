import React from 'react'

import { Skeleton, SkeletonProps } from '@components'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Loaders/Skeleton',
  component: Skeleton,
} as Meta

const Template: Story<SkeletonProps> = (args) => <Skeleton {...args} height={120} />

export const Default = Template.bind({})
Default.args = {}

export const RightToLeftAnimation = Template.bind({})
RightToLeftAnimation.args = {
  direction: 'rtl',
}

export const SlowSpeed = Template.bind({})
SlowSpeed.args = {
  speed: 200,
}

export const FastSpeed = Template.bind({})
SlowSpeed.args = {
  speed: 9000,
}

export const HighlightColor = Template.bind({})
HighlightColor.args = {
  highlightColor: 'primary',
  highlightShade: 'dark',
}

export const BackgroundColor = Template.bind({})
BackgroundColor.args = {
  backgroundColor: 'red',
  backgroundShade: 'lighter',
}

export const WithBorder = Template.bind({})
WithBorder.args = {
  customBorderRadius: 24,
}
