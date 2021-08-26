import React from 'react'

import { fireEvent } from '@testing-library/react-native'

import { renderWithTheme } from '../../../theme/theme.fixture'

import { Checkbox } from './checkbox.comp'

describe('Checkbox component', () => {
  it('should render correctly', () => {
    const component = renderWithTheme(<Checkbox label="Lorem ipsum" />)

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should call the onChange after user press', () => {
    const fn = jest.fn()
    const component = renderWithTheme(<Checkbox label="Lorem ipsum" onChange={fn} />)
    const checkboxButton = component.getByTestId('checkbox')

    fireEvent.press(checkboxButton)

    expect(fn).toHaveBeenCalledWith(true)
  })

  it('should call the onChange after user clicks passing a checked value as true ', () => {
    const fn = jest.fn()
    const component = renderWithTheme(<Checkbox label="Lorem ipsum" onChange={fn} checked={true} />)
    const checkboxButton = component.getByTestId('checkbox')

    fireEvent.press(checkboxButton)

    expect(fn).toHaveBeenCalledWith(false)
  })

  it('should change the check icon after user clicks', () => {
    const component = renderWithTheme(<Checkbox label="Lorem ipsum" />)
    const checkboxButton = component.getByTestId('checkbox')

    fireEvent.press(checkboxButton)

    expect(component.getByTestId('checked-icon')).toBeDefined()
  })

  it('should render with a label if that was passed as a parameter', () => {
    const component = renderWithTheme(<Checkbox label={'Lorem ipsum'} />)

    expect(component.queryByText('Lorem ipsum')).toBeDefined()
  })

  it('should not trigger the onChange if the disable was passed as a parameter', () => {
    const fn = jest.fn()
    const component = renderWithTheme(<Checkbox label="Lorem ipsum" disabled onChange={fn} />)
    const checkboxButton = component.getByTestId('checkbox')

    fireEvent.press(checkboxButton)

    expect(fn).not.toHaveBeenCalled()
  })
})
