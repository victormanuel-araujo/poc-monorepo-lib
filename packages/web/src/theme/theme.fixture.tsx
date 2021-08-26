import React from 'react'

import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { createTheme } from './index'

export function ThemeFixture({ children }) {
  return <ThemeProvider theme={createTheme()}>{children}</ThemeProvider>
}

export function renderWithTheme(element) {
  return render(<ThemeFixture>{element}</ThemeFixture>)
}
