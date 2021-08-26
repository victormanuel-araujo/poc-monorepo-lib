import React from 'react'

import { InputSearch, InputSearchProps } from '@components'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Forms/Input Search',
  component: InputSearch,
} as Meta

const Template: Story<InputSearchProps> = (args) => <InputSearch {...args} />

export const Default = Template.bind({})
Default.args = {
  fluid: false,
  label: 'Lorem Ipsum',
}
