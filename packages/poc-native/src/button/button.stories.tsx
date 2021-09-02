import React from 'react'

import { Button, ButtonProps } from '@components'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed' },
    textProps: { control: { type: 'object' } },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  children: 'Click me',
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary',
  children: 'Click me',
}

export const Flat = Template.bind({})
Flat.args = {
  type: 'flat',
  children: 'Click me',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'Click me',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  children: 'Click me',
}
export const Loading = Template.bind({})
Loading.args = {
  loading: true,
  children: 'Click me',
}
