import React from 'react'

import { ProgressBarProps, ProgressBar } from '@components'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Progress/ProgressBar',
  component: ProgressBar,
} as Meta

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />

export const Default = Template.bind({})
Default.args = {}

export const HalfProgress = Template.bind({})
HalfProgress.args = {
  percent: 50,
}

export const Colored = Template.bind({})
Colored.args = {
  percent: 50,
  progressBackground: 'primary',
}

export const FullColored = Template.bind({})
FullColored.args = {
  percent: 50,
  progressBackground: 'secondary',
  background: 'red',
  backgroundOpacity: 0.7,
}
