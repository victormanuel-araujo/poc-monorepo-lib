import React from 'react'

import { InputPassword, Text } from '@components'
import { fireEvent } from '@testing-library/react-native'

import { renderWithTheme } from '../../../theme/theme.fixture'

describe('input password component', () => {
  it('should render correctly', () => {
    const component = renderWithTheme(<InputPassword />)

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should to call the onSwitchPasswordView function', () => {
    const fn = jest.fn()
    const component = renderWithTheme(<InputPassword onSwitchPasswordView={fn} />)
    const switchButton = component.getByTestId('switch-password-view')

    fireEvent.press(switchButton)
    expect(fn).toHaveBeenCalledWith(true)
  })

  it('should to override the startAdornment prop', () => {
    const component = renderWithTheme(<InputPassword startAdornment={<Text>adornment</Text>} />)

    expect(component.queryByText('adornment')).toBeDefined()
  })

  it("shouldn't override the endAdornment prop", async () => {
    const component = renderWithTheme(<InputPassword endAdornment={<Text>adornment</Text>} />)

    const adornment = component.queryByText('adornment')
    expect(adornment).toBeNull()
  })
})
