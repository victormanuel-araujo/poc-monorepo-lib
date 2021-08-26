import React from 'react'

import { ScrollView } from '@components'
import { Text } from 'react-native'

import { renderWithTheme } from '../../../theme/theme.fixture'

describe('ScrollView', () => {
  it('should render', () => {
    const component = renderWithTheme(<ScrollView />)

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should pass down its children', () => {
    const component = renderWithTheme(
      <ScrollView>
        <Text>Hello world</Text>
      </ScrollView>
    )
    const text = component.getByText('Hello world')

    expect(component.container).toContainElement(text)
  })

  it('should accept other paddings', () => {
    const component = renderWithTheme(<ScrollView spacing="lg" />)

    expect(component.toJSON()).toMatchSnapshot()
  })
})
