import React from 'react'

import { InputEmail, Text } from '@components'
import { fireEvent } from '@testing-library/react-native'

import { renderWithTheme } from '../../../theme/theme.fixture'

describe('input email component', () => {
  it('should render correctly', () => {
    const component = renderWithTheme(<InputEmail />)

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should override the startAdornment prop', () => {
    const component = renderWithTheme(<InputEmail startAdornment={<Text>adornment</Text>} />)

    expect(component.queryByText('adornment')).toBeDefined()
  })

  it('should validate the email correctly, if pass an invalid email, it should get the `error` prop as true', () => {
    const component = renderWithTheme(<InputEmail startAdornment={<Text>adornment</Text>} />)

    const input = component.getByTestId('input-base')

    fireEvent.changeText(input, 'teste@email')
    fireEvent(input, 'blur')

    /* We should not be depending on the internal structures of the component
       but for now we don't have that much to do. After rearraging the component
       structure our testID doesn't override the original testID anymore and it
       even should not anyway. */
    expect(component.getByTestId('input-base-shadow')).toHaveProp('error', true)
  })
})
