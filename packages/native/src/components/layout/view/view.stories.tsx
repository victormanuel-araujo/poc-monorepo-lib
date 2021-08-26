import React from 'react'

import { Text } from '@components'
import { Meta, Story } from '@storybook/react'

import { View } from './view.comp'
import { ViewProps } from './view.types'

export default {
  title: 'Layout/View',
  component: View,
} as Meta

const Template: Story<ViewProps> = (args) => <View {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <Text>Lorem Ipsum</Text>,
}

export const SpacingSM = Template.bind({})
SpacingSM.args = {
  children: <Text>Lorem Ipsum</Text>,
  spacing: 'sm',
}

export const SpacingXL = Template.bind({})
SpacingXL.args = {
  children: <Text>Lorem Ipsum</Text>,
  spacing: 'xl',
}
