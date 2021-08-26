/* eslint-disable import/order */
import * as React from 'react'

import { Drawer, DrawerConsumer, View, Text } from '@components'

import { renderWithTheme } from '../../../theme/theme.fixture'

describe('Drawer Component', () => {
  const renderStructure = () => (
    <DrawerConsumer>
      <Drawer open={true}>
        <View>
          <Text>Lorem Ipsum</Text>
        </View>
      </Drawer>
    </DrawerConsumer>
  )

  // TODO: Fix issue with opacity value in Snapshot Test
  it.skip('should render correctly', () => {
    const component = renderWithTheme(renderStructure())
    expect(component).toMatchSnapshot()
  })

  it('should render the text inside the drawer', () => {
    const component = renderWithTheme(renderStructure())
    expect(component.findByText('Lorem Ipsum')).toBeTruthy()
  })
})
