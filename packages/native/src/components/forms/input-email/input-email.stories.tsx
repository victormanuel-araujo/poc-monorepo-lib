import React from 'react'

import { InputEmail, InputEmailProps } from '@components'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Forms/Input Email',
  component: InputEmail,
} as Meta

const Template: Story<InputEmailProps> = (args) => <InputEmail {...args} />

export const Default = Template.bind({})
Default.args = {
  fluid: false,
  label: 'Lorem Ipsum',
}
