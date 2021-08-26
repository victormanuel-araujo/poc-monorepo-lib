import React from 'react'

import { View, ScrollView, ScrollViewProps, Text } from '@components'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Layout/ScrollView',
  component: ScrollView,
} as Meta

const Template: Story<ScrollViewProps> = (args) => (
  <ScrollView style={{ height: 300 }} {...args}>
    <View style={{ height: 500 }}>
      <Text>Lorem Ipsum</Text>
    </View>
  </ScrollView>
)

export const Default = Template.bind({})
Default.args = {}

export const SpacingSM = Template.bind({})
SpacingSM.args = {
  ...Default.args,
  spacing: 'sm',
}

export const SpacingXL = Template.bind({})
SpacingXL.args = {
  ...Default.args,
  spacing: 'xl',
}
