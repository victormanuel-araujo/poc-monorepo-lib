import * as React from 'react'

import { Screen } from '@components'
import { createTheme, getThemeColor } from '@theme'

import { renderWithTheme } from '../../../theme/theme.fixture'

describe('Screen component', () => {
  it('should render the component correctly', () => {
    const component = renderWithTheme(<Screen />)

    expect(component.queryByTestId('screen')).toBeDefined()
  })

  it('should have "flex" as default display', () => {
    const component = renderWithTheme(<Screen />)

    expect(component.queryByTestId('screen')).toHaveStyle({ display: 'flex' })
  })

  it('should have "white" as default background', () => {
    const theme = createTheme()
    const component = renderWithTheme(<Screen />)

    expect(component.getByTestId('screen')).toHaveStyle({
      backgroundColor: getThemeColor('white')({ theme }),
    })
  })
})
