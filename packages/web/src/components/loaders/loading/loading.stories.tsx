import React from 'react'

import { Loading } from '@components'
import { Meta, Story } from '@storybook/react'

import { LoadingProps } from './loading.types'

export default {
  title: 'Loaders/Loading',
  component: Loading,
} as Meta

const Template: Story<LoadingProps> = (args) => <Loading {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
}
