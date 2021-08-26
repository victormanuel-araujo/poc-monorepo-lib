import React from 'react'

import { Icon, StackIconProps } from '@components'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Icons/Stack',
  component: Icon.Stack,
} as Meta

const Template: Story<StackIconProps> = (args) => <Icon.Stack {...args} />

export const Hacker = Template.bind({})
Hacker.args = {
  stack: 'hacker',
  size: 50,
}

export const Hipster = Template.bind({})
Hipster.args = {
  stack: 'hipster',
  size: 50,
}
export const Human = Template.bind({})
Human.args = {
  stack: 'human',
  size: 50,
}
export const Hustler = Template.bind({})
Hustler.args = {
  stack: 'hustler',
  size: 50,
}
export const Hyper = Template.bind({})
Hyper.args = {
  stack: 'hyper',
  size: 50,
}
