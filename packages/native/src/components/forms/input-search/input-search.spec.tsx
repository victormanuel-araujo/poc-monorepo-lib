import React, { useState } from 'react'

import { InputSearch } from '@components'
import { act, fireEvent } from '@testing-library/react-native'

import { renderWithTheme } from '../../../theme/theme.fixture'

describe('InputSearch', () => {
  it('should render properly', () => {
    const component = renderWithTheme(<InputSearch />)

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should disable clean button when there input is empty', () => {
    const component = renderWithTheme(<InputSearch value="" />)

    expect(component.getByTestId('input-search-clean-button')).toBeDisabled()
  })

  it('should enable clean button when there input is empty', () => {
    const component = renderWithTheme(<InputSearch value="React" />)

    expect(component.getByTestId('input-search-clean-button')).toBeEnabled()
  })

  it('should clear input when the clean button is clicked', () => {
    const clearFn = jest.fn()
    const changeFn = jest.fn()
    const component = renderWithTheme(<InputSearch value="React" onClear={clearFn} onChangeText={changeFn} />)
    const cleanButton = component.getByTestId('input-search-clean-button')
    const internalInputBase = component.getByTestId('input-base')

    fireEvent.press(cleanButton)

    expect(cleanButton).toBeDisabled()
    expect(internalInputBase).toHaveProp('value', '')
    expect(clearFn).toHaveBeenCalled()
    expect(changeFn).toHaveBeenCalledWith('')
  })

  it('should work as a controlled input', () => {
    let setValue: React.Dispatch<React.SetStateAction<string>>

    const Input = () => {
      const [value, _setValue] = useState('React')
      setValue = _setValue

      return <InputSearch value={value} />
    }

    const component = renderWithTheme(<Input />)
    const internalBaseInput = component.getByTestId('input-base')

    expect(internalBaseInput).toHaveProp('value', 'React')

    act(() => setValue('Vue'))

    expect(internalBaseInput).toHaveProp('value', 'Vue')
  })
})
