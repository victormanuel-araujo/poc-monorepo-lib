import React from 'react'

import { Icon, MaterialIconProps } from '@components'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Icons/Material',
  component: Icon.Material,
} as Meta

const Template: Story<MaterialIconProps> = (args) => <Icon.Material {...args} />

export const Search = Template.bind({})
Search.args = {
  icon: 'search',
  size: 24,
  padding: 'sm',
  color: 'black',
  shape: 'empty',
  background: 'none',
}
