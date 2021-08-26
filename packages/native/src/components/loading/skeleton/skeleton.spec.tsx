import React from 'react'

import { act } from '@testing-library/react-native'

import { renderWithTheme } from '../../../theme/theme.fixture'

import { Skeleton } from './skeleton.comp'

describe('Skeleton component', () => {
  const useStateSpy = jest.spyOn(React, 'useState')
  const setState = jest.fn()

  beforeEach(() => {
    useStateSpy.mockClear()
    jest.clearAllMocks()
  })

  it('should render the component correctly', () => {
    const skeleton = renderWithTheme(<Skeleton height={80} />)
    expect(skeleton.queryByTestId('skeleton-comp')).toBeDefined()
    expect(skeleton.toJSON()).toMatchSnapshot()
  })

  it('should have the default props applied', () => {
    expect(Skeleton.defaultProps).toMatchObject({
      direction: 'ltr',
      width: '100%',
      backgroundColor: 'gray',
      backgroundShade: 'lighter',
      highlightColor: 'white',
      highlightShade: 'base',
      customBorderRadius: 0,
      speed: 900,
    })
  })

  it('should have the width and height props correctly applied', () => {
    const skeletonWithoutWidth = renderWithTheme(<Skeleton height={80} />)
    const skeletonWithWidth = renderWithTheme(<Skeleton height={120} width={360} />)

    expect(skeletonWithoutWidth.getByTestId('skeleton-comp')).toHaveStyle({ height: 80 })
    expect(skeletonWithoutWidth.getByTestId('skeleton-gradient-comp')).toHaveStyle({ height: 80 })

    expect(skeletonWithWidth.getByTestId('skeleton-comp')).toHaveStyle({ height: 120, width: 360 })
  })

  it('should change the direction by props', () => {
    const skeletonLtr = renderWithTheme(<Skeleton height={120} />).getByTestId('skeleton-gradient-comp')
    const skeletonRtl = renderWithTheme(<Skeleton height={120} direction="rtl" />).getByTestId('skeleton-gradient-comp')

    expect(skeletonLtr).toHaveProp('start', { x: 0, y: 1 })
    expect(skeletonLtr).toHaveProp('end', { x: 1, y: 1 })

    expect(skeletonRtl).toHaveProp('start', { x: 1, y: 1 })
    expect(skeletonRtl).toHaveProp('end', { x: 0, y: 1 })
  })

  it('should set state for onLayout function trigger when different x value is passed', () => {
    useStateSpy.mockImplementation(() => [{ x: 360 }, setState])

    const skeleton = renderWithTheme(<Skeleton height={120} />)
    act(() => skeleton.toJSON().props.onLayout({ nativeEvent: { layout: { x: 260 } } }))
    act(() => skeleton.toJSON().props.onLayout({ nativeEvent: { layout: { x: 460 } } }))

    expect(setState).toBeCalledTimes(3)
  })

  it('should not set state for onLayout function trigger when same x value is passed', () => {
    useStateSpy.mockImplementation(() => [{ x: 360 }, setState])

    const skeleton = renderWithTheme(<Skeleton height={120} />)

    act(() => skeleton.toJSON().props.onLayout({ nativeEvent: { layout: { x: 260 } } }))
    act(() => {
      skeleton.toJSON().props.onLayout({ nativeEvent: { layout: { x: 260 } } })
    })

    expect(setState).toBeCalledTimes(2)
  })
})
