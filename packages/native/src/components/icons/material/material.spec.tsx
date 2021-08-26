import React from 'react'

import { Icon } from '@components'

import { renderWithTheme } from '../../../theme/theme.fixture'

describe('Material Icons', () => {
  /* These are just smoke tests for the Material Icons,
     we just want to keep them stable and avoid them to break
     in order to make easier transition if that's the case.  */

  it('should render icon', () => {
    const icon = renderWithTheme(<Icon.Material icon="search" />)

    expect(icon.toJSON()).toMatchSnapshot()
  })

  it('should render with round shape', () => {
    const icon = renderWithTheme(<Icon.Material icon="search" shape="round" />)

    expect(icon.toJSON()).toMatchSnapshot()
  })

  it('should render with rounded square shape', () => {
    const icon = renderWithTheme(<Icon.Material icon="search" shape="round-square" />)

    expect(icon.toJSON()).toMatchSnapshot()
  })

  it('should render with border, shape and size', () => {
    const icon = renderWithTheme(
      <Icon.Material icon="search" shape="round" border="black" background="white" size={32} />
    )

    expect(icon.toJSON()).toMatchSnapshot()
  })
})
