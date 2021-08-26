import React from 'react'

import { fireEvent } from '@testing-library/react-native'

import { renderWithTheme } from '../../../theme/theme.fixture'

import { Rating } from './rating.comp'

describe('Rating component', () => {
  it('should render correctly', () => {
    const component = renderWithTheme(<Rating />)

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should render correctly with decimal numbers', () => {
    const component = renderWithTheme(<Rating value={2.5} />)

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should disable buttons', () => {
    const component = renderWithTheme(<Rating disabled maxRatingValue={2} />)

    expect(component.getByTestId('rating-button-0')).toBeDisabled()
    expect(component.getByTestId('rating-button-1')).toBeDisabled()
  })

  it('should call the onChange after user press', () => {
    const fn = jest.fn()
    const component = renderWithTheme(<Rating onChange={fn} />)
    const rattingButtonPositionOne = component.getByTestId('rating-button-1')

    fireEvent.press(rattingButtonPositionOne)

    expect(fn).toHaveBeenCalledWith(2)
  })

  it('should render number of evaluators', () => {
    const component = renderWithTheme(<Rating showTotalOfEvaluators totalOfEvaluators={100} />)
    const numberOfEvaluatorComponent = component.getByTestId('ratting-number-of-evaluators')
    expect(numberOfEvaluatorComponent.props.children.join('')).toBe('(100)')
  })
})
