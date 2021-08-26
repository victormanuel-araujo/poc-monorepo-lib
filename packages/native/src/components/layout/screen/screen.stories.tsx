import React from 'react'

import { Screen, Text, ScreenProps } from '@components'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Layout/Screen',
  component: Screen,
} as Meta

const Template: Story<ScreenProps> = (args) => <Screen {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <Text>Lorem Ipsum</Text>,
}
