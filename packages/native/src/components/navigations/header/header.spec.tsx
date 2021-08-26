import React from 'react'

import { Header, Icon } from '@components'
import { fireEvent } from '@testing-library/react-native'

import { renderWithTheme } from '../../../theme/theme.fixture'

describe('Header Component', () => {
  it('should render correctly', () => {
    const component = renderWithTheme(<Header />)

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should render the right adornment correctly', () => {
    const component = renderWithTheme(<Header rightAdornment={<Icon.Material icon="close" size={20} shape="none" />} />)

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should render the left adornment correctly', () => {
    const component = renderWithTheme(<Header leftAdornment={<Icon.Material icon="close" size={20} shape="none" />} />)

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should to call the right action function', () => {
    const fn = jest.fn()
    const component = renderWithTheme(
      <Header rightAction={fn} rightAdornment={<Icon.Material icon="close" size={20} shape="none" />} />
    )

    const button = component.queryByTestId('right-action')
    fireEvent.press(button)

    expect(fn).toHaveBeenCalled()
  })

  it('should to call the left action function', () => {
    const fn = jest.fn()
    const component = renderWithTheme(
      <Header leftAction={fn} leftAdornment={<Icon.Material icon="arrow-back" size={20} shape="none" />} />
    )

    const button = component.queryByTestId('left-action')
    fireEvent.press(button)

    expect(fn).toHaveBeenCalled()
  })

  it('should to render the right and left adornment correctly with their props', () => {
    const component = renderWithTheme(
      <Header
        leftAdornment={<Icon.Material icon="arrow-back" size={20} shape="none" />}
        leftAdornmentProps={{ spacing: 'xl' }}
        rightAdornment={<Icon.Material icon="close" size={20} shape="none" />}
        rightAdornmentProps={{ spacing: 'sm', background: 'red' }}
      />
    )

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should to render the title correctly with it props', () => {
    const component = renderWithTheme(<Header title="Lorem Ipsum" titleProps={{ color: 'red', size: 'sm' }} />)

    expect(component.toJSON()).toMatchSnapshot()
  })
})
