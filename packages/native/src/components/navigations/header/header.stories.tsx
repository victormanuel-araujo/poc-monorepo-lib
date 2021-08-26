import React from 'react'

import { Header, HeaderProps, Icon } from '@components'
import { Meta, Story } from '@storybook/react'
import { Image } from 'react-native'

export default {
  title: 'Navigations/Header',
  component: Header,
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Lorem Ipsum',
}

export const RightAction = Template.bind({})
RightAction.args = {
  ...Default.args,
  rightAdornment: <Icon.Material icon="close" shape="none" />,
  rightAction: () => null,
}

export const LeftAction = Template.bind({})
LeftAction.args = {
  ...Default.args,
  leftAdornment: <Icon.Material icon="arrow-back" shape="none" />,
  leftAction: () => null,
}

export const BothActions = Template.bind({})
BothActions.args = {
  ...Default.args,
  leftAdornment: <Icon.Material icon="arrow-back" shape="none" />,
  leftAction: () => null,
  rightAdornment: <Icon.Material icon="close" shape="none" />,
  rightAction: () => null,
}

export const StationHeader = Template.bind({})
StationHeader.args = {
  leftAdornmentProps: { spacing: 'md', paddingRight: 0, paddingBottom: 0, paddingTop: 0 },
  leftAdornment: <Image source={{ uri: 'https://i.imgur.com/Dv0AhuW.png' }} style={{ width: 99, height: 34 }} />,
  rightAdornment: <Icon.Material icon="notifications" background="primary" size={16} />,
  rightAction: () => null,
}
