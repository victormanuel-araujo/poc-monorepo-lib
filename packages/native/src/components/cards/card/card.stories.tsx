import React from 'react'

import { Card, Text, CardProps } from '@components'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Cards/Card',
  component: Card,
} as Meta

const Template: Story<CardProps> = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: <Text>Card Component</Text>,
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  children: <Text>Card Component</Text>,
}

export const LargeContent = Template.bind({})
LargeContent.args = {
  children: (
    <>
      <Text>Card Component</Text>
      <Text>Card Component</Text>
      <Text>Card Component</Text>
      <Text>Card Component</Text>
    </>
  ),
}

export const LargeSpacing = Template.bind({})
LargeSpacing.args = {
  spacing: 'lg',
  children: <Text>Card Component</Text>,
}

export const CustomBackground = Template.bind({})
CustomBackground.args = {
  backgroundColor: 'red',
  children: <Text color="white">Card Component</Text>,
}

export const CustomBorder = Template.bind({})
CustomBorder.args = {
  borderWidth: 2,
  borderColor: 'red',
  children: <Text>Card Component</Text>,
}
