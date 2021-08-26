import React from 'react'

import { StepIndicator } from '@components'
import { fireEvent } from '@testing-library/react-native'

import { renderWithTheme } from '../../../theme/theme.fixture'

describe('Step Indicator Component', () => {
  it('should render correctly', () => {
    const component = renderWithTheme(<StepIndicator length={3} />)

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should have the correct count of the dots (steps)', () => {
    const component = renderWithTheme(<StepIndicator length={4} />)
    const dots = component.queryAllByTestId('step-dot')

    expect(dots).toHaveLength(4)
  })

  it('should to call the onPress Function when click in one dot', () => {
    const fn = jest.fn()
    const component = renderWithTheme(<StepIndicator length={3} onPress={fn} />)
    const dots = component.queryAllByTestId('step-dot')
    const secondDot = dots[1] // count start in 0

    fireEvent.press(secondDot)
    expect(fn).toHaveBeenCalledWith(1) // should call with the correct dot index
  })

  it('should to call the onChange function when the user press one dot', () => {
    const fn = jest.fn()
    const component = renderWithTheme(<StepIndicator length={3} onChange={fn} />)
    const dots = component.queryAllByTestId('step-dot')
    const secondDot = dots[1] // count start in 0

    fireEvent.press(secondDot)
    expect(fn).toHaveBeenCalledWith(1)
  })

  it("shouldn't to call the onChange function when the user click in a active dot", () => {
    const fn = jest.fn()
    const component = renderWithTheme(<StepIndicator length={3} onChange={fn} />)
    const dots = component.queryAllByTestId('step-dot')
    const firstDot = dots[0]

    fireEvent.press(firstDot)
    expect(fn).not.toHaveBeenCalled()
  })

  it("shouldn't to call the onChange function when the user click in a forward dot when the `lockFOrward` prop is true", () => {
    const fn = jest.fn()
    const component = renderWithTheme(<StepIndicator length={5} startFrom={2} onChange={fn} lockForward />)
    const dots = component.queryAllByTestId('step-dot')
    const lastDot = dots[4]

    fireEvent.press(lastDot)
    expect(fn).not.toHaveBeenCalled()
  })
})
