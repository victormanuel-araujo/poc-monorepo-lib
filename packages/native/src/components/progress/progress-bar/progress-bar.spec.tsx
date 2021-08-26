import * as React from 'react'

import { ProgressBar } from '@components'

import { renderWithTheme } from '../../../theme/theme.fixture'

describe('progress bar component', () => {
  it('should render correctly', () => {
    const component = renderWithTheme(<ProgressBar />)

    expect(component).toMatchSnapshot()
  })

  it('should have the percent label', () => {
    const component = renderWithTheme(<ProgressBar showPercentage value={10} />)
    const label = component.queryByText('10%')

    expect(label).toBeTruthy()
  })
})
