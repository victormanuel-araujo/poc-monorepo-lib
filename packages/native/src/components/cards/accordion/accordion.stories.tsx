import React from 'react'

import { Text, Accordion, AccordionProps } from '@components'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Cards/Accordion',
  component: Accordion,
} as Meta

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />

const TemplateWithWrapper: Story<AccordionProps> = (args) => (
  <div style={{ width: '300px' }}>
    <Accordion {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  children: <Text>Accordion Component</Text>,
}

export const Secondary = TemplateWithWrapper.bind({})
Secondary.args = {
  color: 'secondary',
  children: <Text>Accordion Component</Text>,
}

export const LargeContent = Template.bind({})
LargeContent.args = {
  children: (
    <>
      <Text>Accordion Component</Text>
      <Text>Accordion Component</Text>
      <Text>Accordion Component</Text>
      <Text>Accordion Component</Text>
    </>
  ),
}

export const LargeSpacing = Template.bind({})
LargeSpacing.args = {
  spacing: 'lg',
  children: <Text>Accordion Component</Text>,
}

export const CustomBackground = Template.bind({})
CustomBackground.args = {
  backgroundColor: 'red',
  children: <Text color="white">Accordion Component</Text>,
}

export const CustomBorder = Template.bind({})
CustomBorder.args = {
  borderWidth: 2,
  borderColor: 'red',
  children: <Text>Accordion Component</Text>,
}
