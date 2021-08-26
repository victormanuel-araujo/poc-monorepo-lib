import React from 'react'

import { Button } from '@components'
import { fireEvent } from '@testing-library/react-native'
import { createTheme, getThemeColor } from '@theme'

import { renderWithTheme } from '../../../theme/theme.fixture'

describe('Button', () => {
  it('should render correctly', () => {
    const component = renderWithTheme(<Button>Click me</Button>)

    expect(component.getByRole('button')).toBeDefined()
    expect(component.queryByTestId('loading')).toBeNull()
  })

  it('should call onPress callback', () => {
    const press = jest.fn()
    const component = renderWithTheme(<Button onPress={press}>Click me</Button>)

    fireEvent.press(component.getByRole('button'))

    expect(press).toHaveBeenCalled()
  })

  it('should not call onPress when is loading', () => {
    const press = jest.fn()
    const component = renderWithTheme(
      <Button onPress={press} loading>
        Click me
      </Button>
    )

    fireEvent.press(component.getByRole('button'))
    expect(press).not.toHaveBeenCalled()
  })

  it('should not call onPress when is disabled', () => {
    const press = jest.fn()
    const component = renderWithTheme(
      <Button onPress={press} disabled>
        Click me
      </Button>
    )

    fireEvent.press(component.getByRole('button'))
    expect(press).not.toHaveBeenCalled()
  })

  it('should render text element', () => {
    const component = renderWithTheme(<Button>Click me</Button>)

    expect(component.getByText('Click me')).toBeDefined()
  })

  it('should pass down styles', () => {
    /* Use an absurd value like pure red, so we can make sure
       is not the value of the theme */
    const component = renderWithTheme(<Button style={{ borderColor: '#FF0000' }}>Click me</Button>)

    expect(component.getByTestId('button')).toHaveStyle({ borderColor: '#FF0000' })
  })

  it('should the primary type to have the primary color as background', () => {
    const theme = createTheme()
    const component = renderWithTheme(<Button>Click me</Button>)

    expect(component.getByTestId('button')).toHaveStyle({
      backgroundColor: getThemeColor('primary')({ theme }),
    })
  })

  it('it should have the primary type by default', () => {
    const component = renderWithTheme(<Button>Click me</Button>)

    expect(component.getByTestId('button').props.type).toBe('primary')
  })

  it('should hide the label/children and show the activity indicator when loading', () => {
    const component = renderWithTheme(<Button loading>Click me</Button>)

    expect(component.getByTestId('button-label')).toHaveStyle({ opacity: 0 })
    expect(component.getByTestId('loading')).toBeDefined()
  })
})
