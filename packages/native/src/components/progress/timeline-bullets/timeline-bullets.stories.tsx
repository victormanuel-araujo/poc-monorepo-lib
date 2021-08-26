import { View, Card, Text, TimelineBullets, TimelineBulletsProps } from '@components'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'progress/Timeline Bullets',
  component: TimelineBullets,
} as Meta

const Template: Story<TimelineBulletsProps> = (args) => (
  <TimelineBullets {...args}>
    <View spacing="sm">
      <Card>
        <View>
          <Text>Lorem Ipsum</Text>
        </View>
      </Card>
    </View>
    <View spacing="sm">
      <Card>
        <View>
          <Text>Lorem Ipsum</Text>
        </View>
      </Card>
    </View>
    <View spacing="sm">
      <Card>
        <View>
          <Text>Lorem Ipsum</Text>
        </View>
      </Card>
    </View>
    <View spacing="sm">
      <Card>
        <View>
          <Text>Lorem Ipsum</Text>
        </View>
      </Card>
    </View>
  </TimelineBullets>
)

export const Default = Template.bind({})
Default.args = {
  activeIndex: 3,
  color: 'white',
  highlightColor: 'secondary',
}
