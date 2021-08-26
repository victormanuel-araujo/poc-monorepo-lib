import React from 'react'

import { Icon } from '@components'

import { renderWithTheme } from '../../../theme/theme.fixture'

describe('Playlist icon', () => {
  it('should render icon', () => {
    const icon = renderWithTheme(<Icon.Playlist />)

    expect(icon.toJSON()).toMatchSnapshot()
  })

  it('should render icon with colors and size', () => {
    const icon = renderWithTheme(<Icon.Playlist background="secondary" upArrow="primary" downArrow="white" size={32} />)

    expect(icon.toJSON()).toMatchSnapshot()
  })
})
