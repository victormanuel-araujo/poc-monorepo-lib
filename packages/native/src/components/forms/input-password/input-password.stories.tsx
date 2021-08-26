import React from 'react'

import { InputPassword, InputPasswordProps } from '@components'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Forms/Input Password',
  component: InputPassword,
} as Meta

const Template: Story<InputPasswordProps> = (args) => <InputPassword {...args} />

export const Default = Template.bind({})
Default.args = {
  fluid: false,
  label: 'Lorem Ipsum',
}

export const MinLength5 = Template.bind({})
MinLength5.args = {
  ...Default.args,
  validations: {
    minLength: 5,
  },
}

export const OnlyNumbersValidation = Template.bind({})
OnlyNumbersValidation.args = {
  ...Default.args,
  validations: {
    regex: /^\d+$/gi,
  },
}

export const OnlyStringValidation = Template.bind({})
OnlyStringValidation.args = {
  ...Default.args,
  validations: {
    regex: /[a-zA-Z]$/gi,
  },
}
