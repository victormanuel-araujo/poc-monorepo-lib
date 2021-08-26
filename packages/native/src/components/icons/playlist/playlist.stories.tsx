import React from 'react'

import { Icon, PlaylistIconProps } from '@components'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Icons/Playlist',
  component: Icon.Playlist,
} as Meta

const Template: Story<PlaylistIconProps> = (args) => <Icon.Playlist {...args} />

export const Simple = Template.bind({})
Simple.args = {
  background: 'black',
  upArrow: 'white',
  downArrow: 'white',
  size: 54,
}

export const Colored = Template.bind({})
Colored.args = {
  background: 'secondary',
  upArrow: 'primary',
  downArrow: 'white',
  size: 54,
}
