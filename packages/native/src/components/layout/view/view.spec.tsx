import * as React from 'react'

import { createTheme } from '@theme'

import { renderWithTheme } from '../../../theme/theme.fixture'

import { View } from './view.comp'

describe('View component', () => {
  it('should render the component correctly', () => {
    const component = renderWithTheme(<View />)

    expect(component.queryByTestId('view')).toBeDefined()
  })

  it('should have "flex" as default display', () => {
    const component = renderWithTheme(<View />)

    expect(component.queryByTestId('view')).toHaveStyle({ display: 'flex' })
  })

  it('should to apply the correct style to directional padding to the view', () => {
    const component = renderWithTheme(<View paddingRight={10} paddingTop={5} paddingBottom={15} paddingLeft={20} />)

    expect(component.queryByTestId('view')).toHaveStyle({
      paddingRight: 10,
      paddingBottom: 15,
      paddingLeft: 20,
      paddingTop: 5,
    })
  })

  it('should apply the correct alignment', () => {
    const component = renderWithTheme(<View alignment="center" justifyContent="flex-end" />)

    expect(component.queryByTestId('view')).toHaveStyle({
      alignItems: 'center',
      justifyContent: 'flex-end',
    })
  })

  it('should the spacing prop apply the correct paddings to the view', () => {
    const theme = createTheme()
    const component = renderWithTheme(<View spacing="xl" />)

    expect(component.queryByTestId('view')).toHaveStyle({
      paddingTop: theme.paddings.xl,
      paddingRight: theme.paddings.xl,
      paddingBottom: theme.paddings.xl,
      paddingLeft: theme.paddings.xl,
    })
  })

  it('should the customMultiplier prop apply the correct paddings to the view and override the "spacing" prop', () => {
    const theme = createTheme()
    const customMultiplier = 2
    const component = renderWithTheme(<View spacing="xl" customMultiplier={customMultiplier} />)

    expect(component.queryByTestId('view')).toHaveStyle({
      paddingTop: customMultiplier * theme.units.base,
      paddingRight: customMultiplier * theme.units.base,
      paddingBottom: customMultiplier * theme.units.base,
      paddingLeft: customMultiplier * theme.units.base,
    })
  })
})
