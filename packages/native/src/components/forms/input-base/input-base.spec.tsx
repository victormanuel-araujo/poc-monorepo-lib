import React from 'react'

import { Icon, InputBase } from '@components'
import { fireEvent } from '@testing-library/react-native'

import { renderWithTheme } from '../../../theme/theme.fixture'

describe('InputBase component', () => {
  it('should render correctly', () => {
    const component = renderWithTheme(<InputBase />)

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should exec the onChangeText function and pass the new value as param', () => {
    const func = jest.fn()
    const component = renderWithTheme(<InputBase onChangeText={func} />)
    const input = component.getByTestId('input-base')

    fireEvent.changeText(input, 'lorem ipsum')

    expect(func).toHaveBeenCalledWith('lorem ipsum')
  })

  it('should render the adornment correctly', () => {
    const component = renderWithTheme(<InputBase startAdornment={<Icon.Material icon="search" />} />)

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should render the error type correctly', () => {
    const component = renderWithTheme(<InputBase error />)

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should do not call the onChangeText function when input is disabled', () => {
    const func = jest.fn()
    const component = renderWithTheme(<InputBase onChangeText={func} disabled={true} />)
    const input = component.getByTestId('input-base')

    fireEvent.changeText(input, 'lorem ipsum')

    expect(func).not.toHaveBeenCalled()
  })

  it('should the type "password" have the "secureTextEntry" prop', () => {
    const component = renderWithTheme(<InputBase type="password" />)
    const input = component.getByTestId('input-base')

    expect(input.props.secureTextEntry).toBeTruthy()
  })

  it('should the "onFocus" function be called', () => {
    const func = jest.fn()
    const component = renderWithTheme(<InputBase onFocus={func} />)
    const input = component.getByTestId('input-base')

    fireEvent(input, 'focus')
    expect(func).toHaveBeenCalled()
  })

  it('should the "onBlur" function be called', () => {
    const func = jest.fn()
    const component = renderWithTheme(<InputBase onBlur={func} />)
    const input = component.getByTestId('input-base')

    fireEvent(input, 'blur')
    expect(func).toHaveBeenCalled()
  })

  it('should not duplicated accessibility label', () => {
    const component = renderWithTheme(<InputBase accessibilityLabel="Sample input component" />)

    expect(component.getAllByA11yLabel('Sample input component')).toHaveLength(1)
  })

  it('shoud work as a controlled input', () => {
    function Input() {
      const [text, setText] = React.useState('')

      // Remove numbers
      const handleChangeText = (newText: string) => setText(newText.replace(/\d/g, ''))

      return <InputBase value={text} onChangeText={handleChangeText} />
    }

    const component = renderWithTheme(<Input />)
    const internalTextInput = component.getByTestId('input-base')

    fireEvent.changeText(internalTextInput, 'abc123')

    expect(internalTextInput).toHaveProp('value', 'abc')
  })

  it('should avoid updates when value doesnt change on controlled components', () => {
    function Input() {
      const [text, setText] = React.useState('')

      // Accept only numbers
      const handleChangeText = (newText: string) => {
        if (/^\d+$/.test(newText)) {
          setText(newText)
        }
      }

      return <InputBase value={text} onChangeText={handleChangeText} />
    }

    const component = renderWithTheme(<Input />)
    const internalTextInput = component.getByTestId('input-base')

    fireEvent.changeText(internalTextInput, '123')
    fireEvent.changeText(internalTextInput, '123.')

    expect(internalTextInput).toHaveProp('value', '123')
  })

  it('should avoid updates when is not controlled', () => {
    const component = renderWithTheme(<InputBase />)
    const internalTextInput = component.getByTestId('input-base')

    fireEvent.changeText(internalTextInput, '123')
    fireEvent.changeText(internalTextInput, '123.')

    expect(internalTextInput).toHaveProp('value', '123.')
  })
})
