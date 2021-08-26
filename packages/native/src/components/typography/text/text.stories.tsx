import React from 'react'

import { Meta, Story } from '@storybook/react'

import { Text } from './text.comp'
import { TextProps } from './text.types'

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    children: { control: { type: 'text' } },
  },
} as Meta

const Template: Story<TextProps> = (args) => <Text {...args} />

export const Description = Template.bind({})
Description.args = {
  children: 'Lorem Ipsum',
}

export const Title = Template.bind({})
Title.args = {
  children: 'Lorem Ipsum',
  type: 'title',
}

export const Tips = Template.bind({})
Tips.args = {
  children: 'Lorem Ipsum',
  type: 'tips',
}

export const Error = Template.bind({})
Error.args = {
  children: 'Lorem Ipsum',
  type: 'error',
}

export const ButtonLabel = Template.bind({})
ButtonLabel.args = {
  children: 'Lorem Ipsum',
  type: 'button-label',
}

export const InputLabel = Template.bind({})
InputLabel.args = {
  children: 'Lorem Ipsum',
  type: 'input-label',
}
