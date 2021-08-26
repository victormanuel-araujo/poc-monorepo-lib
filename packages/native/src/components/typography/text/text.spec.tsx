import * as React from 'react'

import { createTheme, getThemeColor } from '@theme'

import { renderWithTheme } from '../../../theme/theme.fixture'

import { Text } from './text.comp'

describe('Text component', () => {
  it('should render the text correctly', () => {
    const render = renderWithTheme(<Text>Lorem Ipsum</Text>)

    expect(render.getByText('Lorem Ipsum')).toBeDefined()
  })

  it('should the title type have the correctly styles using the theme values', () => {
    const theme = createTheme()
    const render = renderWithTheme(<Text type="title">Lorem Ipsum</Text>)

    expect(render.getByRole('text')).toHaveStyle({
      fontSize: theme.fontSizes.lg,
      color: getThemeColor('black')({ theme }),
    })
  })

  it('should the description type have the correct styles using the theme values', () => {
    const theme = createTheme()
    const render = renderWithTheme(<Text type="description">Lorem Ipsum</Text>)

    expect(render.getByRole('text')).toHaveStyle({
      fontSize: theme.fontSizes.md,
      color: getThemeColor('black')({ theme }),
    })
  })

  it('should the tips type have the correct styles using the theme values', () => {
    const theme = createTheme()
    const render = renderWithTheme(<Text type="tips">Lorem Ipsum</Text>)

    expect(render.getByRole('text')).toHaveStyle({
      color: getThemeColor('gray', 'dark')({ theme }),
      fontSize: theme.fontSizes.md,
    })
  })

  it('should the error type have the correct styles using the theme values', () => {
    const theme = createTheme()
    const render = renderWithTheme(<Text type="error">Lorem Ipsum</Text>)

    expect(render.getByRole('text')).toHaveStyle({
      color: theme.colors.red.base,
      fontSize: theme.fontSizes.md,
    })
  })

  it('should the "color" prop override the colors of the text', () => {
    const theme = createTheme()
    const render = renderWithTheme(<Text color="secondary">Lorem Ipsum</Text>)

    expect(render.getByRole('text')).toHaveStyle({
      color: getThemeColor('secondary')({ theme }),
    })
  })

  it('should the "decoration" prop with the value "line-through" apply the correct style to the text', () => {
    const render = renderWithTheme(<Text decoration="line-through">Lorem Ipsum</Text>)

    expect(render.getByRole('text')).toHaveStyle({
      textDecorationLine: 'line-through',
    })
  })

  it('should the "decoration" prop with the value "underline" apply the correct style to the text', () => {
    const render = renderWithTheme(<Text decoration="underline">Lorem Ipsum</Text>)

    expect(render.getByRole('text')).toHaveStyle({
      textDecorationLine: 'underline',
    })
  })

  it('should the "align" prop apply the correct style to the component', () => {
    const render = renderWithTheme(<Text align="center">Lorem Ipsum</Text>)

    expect(render.getByRole('text')).toHaveStyle({
      textAlign: 'center',
    })
  })

  it('should the "size" prop apply the correct style to the component / font size and line height', () => {
    const theme = createTheme()
    const render = renderWithTheme(<Text size="md">Lorem Ipsum</Text>)

    expect(render.getByRole('text')).toHaveStyle({
      fontSize: theme.fontSizes.md,
      lineHeight: theme.lineHeights.md,
    })
  })

  it('should the "family" prop apply the correct style to the component / font family', () => {
    const theme = createTheme()
    const render = renderWithTheme(<Text family="title">Lorem Ipsum</Text>)

    expect(render.getByRole('text')).toHaveStyle({
      fontFamily: theme.fonts.title,
    })
  })
})
