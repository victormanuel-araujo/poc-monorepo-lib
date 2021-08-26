import React from 'react'

import { Icon, InputBase, InputBaseProps } from '@components'
import { Meta, Story } from '@storybook/react'
import { Image } from 'react-native'

export default {
  title: 'Forms/Input Base',
  component: InputBase,
} as Meta

const Template: Story<InputBaseProps> = (args) => <InputBase {...args} />

export const Default = Template.bind({})
Default.args = {
  fluid: false,
  label: 'Lorem Ipsum',
}

export const Password = Template.bind({})
Password.args = {
  ...Default.args,
  type: 'password',
}

export const TextArea = Template.bind({})
TextArea.args = {
  ...Default.args,
  type: 'textarea',
  numberOfLines: 4,
}

export const Fluid = Template.bind({})
Fluid.args = {
  ...Default.args,
  fluid: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Default.args,
  disabled: true,
}

export const Error = Template.bind({})
Error.args = {
  ...Default.args,
  error: true,
}

export const StartAdornment = Template.bind({})
StartAdornment.args = {
  ...Default.args,
  startAdornment: (
    <Image source={{ uri: 'https://img.icons8.com/wired/452/hollow-knight.png' }} style={{ width: 20, height: 20 }} />
  ),
}

export const EndAdornment = Template.bind({})
EndAdornment.args = {
  ...Default.args,
  endAdornment: (
    <Image source={{ uri: 'https://img.icons8.com/wired/452/hollow-knight.png' }} style={{ width: 20, height: 20 }} />
  ),
}

export const BothAdornments = Template.bind({})
BothAdornments.args = {
  ...Default.args,
  startAdornment: (
    <Image source={{ uri: 'https://img.icons8.com/wired/452/hollow-knight.png' }} style={{ width: 20, height: 20 }} />
  ),
  endAdornment: <Icon.Material icon="close" shape="none" size={20} />,
}

export const WithIcons = Template.bind({})
WithIcons.args = {
  ...Default.args,
  startAdornment: <Icon.Material icon="search" shape="none" />,
}
