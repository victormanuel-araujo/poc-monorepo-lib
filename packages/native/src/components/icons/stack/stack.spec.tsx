import React from 'react'

import { Icon } from '@components'

import { renderWithTheme } from '../../../theme/theme.fixture'

describe('Stack Icons', () => {
  it('should render hacker icon', () => {
    const icon = renderWithTheme(<Icon.Stack size={50} stack="hacker" />)

    const svg = icon.getByTestId('hacker-icon')

    expect(svg).toHaveProp('width', 50)
    expect(svg).toHaveProp('height', 50)
  })

  it('should render hipster icon', () => {
    const icon = renderWithTheme(<Icon.Stack size={50} stack="hipster" />)

    const svg = icon.getByTestId('hipster-icon')

    expect(svg).toHaveProp('width', 50)
    expect(svg).toHaveProp('height', 50)
  })

  it('should render human icon', () => {
    const icon = renderWithTheme(<Icon.Stack size={50} stack="human" />)

    const svg = icon.getByTestId('human-icon')

    expect(svg).toHaveProp('width', 50)
    expect(svg).toHaveProp('height', 50)
  })

  it('should render hustler icon', () => {
    const icon = renderWithTheme(<Icon.Stack size={50} stack="hustler" />)

    const svg = icon.getByTestId('hustler-icon')

    expect(svg).toHaveProp('width', 50)
    expect(svg).toHaveProp('height', 50)
  })

  it('should render hyper icon', () => {
    const icon = renderWithTheme(<Icon.Stack size={50} stack="hyper" />)

    const svg = icon.getByTestId('hyper-icon')

    expect(svg).toHaveProp('width', 50)
    expect(svg).toHaveProp('height', 50)
  })
})
