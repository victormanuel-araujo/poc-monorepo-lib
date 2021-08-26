import React from 'react'

import { FlatCheckbox, FlatCheckboxProps, View, Text, Icon } from '@components'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Forms/Flat Checkbox',
  component: FlatCheckbox,
} as Meta

const Template: Story<FlatCheckboxProps> = (args) => <FlatCheckbox {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Lorem Ipsum',
}

export const Checked = Template.bind({})
Checked.args = {
  ...Default.args,
  checked: true,
}

export const DifferentSize = Template.bind({})
DifferentSize.args = {
  ...Default.args,
  size: 32,
}

export const UncheckedProps = Template.bind({})
UncheckedProps.args = {
  ...Default.args,
  size: 32,
  uncheckedProps: { thickness: 5, color: 'primary' },
}

export const CheckedProps = Template.bind({})
CheckedProps.args = {
  ...Default.args,
  checked: true,
  checkedProps: { background: 'primary', color: 'red' },
}

export const DisabledAndUnchecked = Template.bind({})
DisabledAndUnchecked.args = {
  ...Default.args,
  disabled: true,
}

export const DisabledAndChecked = Template.bind({})
DisabledAndChecked.args = {
  ...Default.args,
  disabled: true,
  checked: true,
}

export const DifferentRadius = Template.bind({})
DifferentRadius.args = {
  ...Default.args,
  radius: 10,
}

export const TextSpacingBetweenCheckbox = Template.bind({})
TextSpacingBetweenCheckbox.args = {
  ...Default.args,
  textSpacing: 'lg',
}

export const WithCustomTextProps = Template.bind({})
WithCustomTextProps.args = {
  ...Default.args,
  textProps: { size: 'lg', weight: 'bold' },
}

export const WithCustomIconProps = Template.bind({})
WithCustomIconProps.args = {
  ...Default.args,
  iconProps: { border: 'primary' },
  checked: true,
}

export const WithChildrenAsComponents = Template.bind({})
WithChildrenAsComponents.args = {
  children: (
    <View dir="row" alignment="center">
      <Icon.Material icon="star" shape="none" />
      <Text>Hacker (Desenvolvimento)</Text>
    </View>
  ),
}
