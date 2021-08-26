import * as React from 'react'

import { StepIndicator, StepIndicatorProps } from '@components'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'navigations/Step Indicator',
  component: StepIndicator,
} as Meta

const Template: Story<StepIndicatorProps> = (args) => <StepIndicator {...args} />

export const Default = Template.bind({})
Default.args = {
  length: 3,
}

export const SpacingLg = Template.bind({})
SpacingLg.args = {
  length: 3,
  spacing: 'lg',
}

export const MoreLength = Template.bind({})
MoreLength.args = {
  length: 5,
}

export const CustomColor = Template.bind({})
CustomColor.args = {
  length: 3,
  color: 'red',
}

export const StartFrom1 = Template.bind({})
StartFrom1.args = {
  length: 3,
  startFrom: 1,
}

export const Retroactive = Template.bind({})
Retroactive.args = {
  length: 5,
  startFrom: 2,
  retroactive: true,
}
