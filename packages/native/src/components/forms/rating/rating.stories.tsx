import React from 'react'

import { Rating, RatingProps } from '@components'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Forms/Rating',
  component: Rating,
} as Meta

const Template: Story<RatingProps> = (args) => <Rating {...args} />

export const Default = Template.bind({})
Default.args = {
  disabled: false,
  maxRatingValue: 5,
  value: 0,
  showTotalOfEvaluators: false,
  totalOfEvaluators: 0,
}
