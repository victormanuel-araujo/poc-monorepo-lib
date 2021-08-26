import React from 'react'

import { Checkbox, CheckboxProps } from '@components'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
} as Meta

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {
  fluid: false,
  label: 'Lorem Ipsum',
}

export const Checked = Template.bind({})
Checked.args = {
  ...Default.args,
  checked: true,
}

export const Correct = Template.bind({})
Correct.args = {
  ...Default.args,
  checked: true,
  checkedBackgroundColor: 'primary',
  checkedLabelColor: 'black',
}

export const WrongAnswer = Template.bind({})
WrongAnswer.args = {
  ...Default.args,
  checked: true,
  checkedBackgroundColor: 'red',
  checkedLabelColor: 'black',
}

export const CorrectAnswer = Template.bind({})
CorrectAnswer.args = {
  ...Default.args,
  uncheckedBackgroundColor: 'primary',
}
