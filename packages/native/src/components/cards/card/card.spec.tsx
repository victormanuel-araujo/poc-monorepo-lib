import React from 'react'

import { CardProps, Text, Card } from '@components'
import { createTheme, getThemeColor } from '@theme'
import { get } from 'lodash'

import { renderWithTheme } from '../../../theme/theme.fixture'

describe('Card Component', () => {
  it('should render the children correctly', () => {
    const component = renderWithTheme(
      <Card>
        <Text>lorem-ipsum</Text>
      </Card>
    )

    expect(component.getByText('lorem-ipsum')).toBeDefined()
  })

  it('should have the default props', () => {
    const component = renderWithTheme(<Card />)
    const props: CardProps = get(component, ['container', 'props', 'children', 'props'], {})

    expect(props.color).toBe('primary')
    expect(props.borderWidth).toBe(1)
    expect(props.borderColor).toBe('black')
    expect(props.backgroundColor).toBe('white')
    expect(props.spacing).toBe('sm')
    expect(props.opacity).toBe(1)
    expect(props.offset).toBe(7)
  })

  it('should card to have a View component', () => {
    const component = renderWithTheme(<Card />)

    expect(component.getByTestId('view')).toBeDefined()
  })

  it('should to render multiple children', () => {
    const component = renderWithTheme(
      <Card>
        <Text>Lorem-ipsum</Text>
        <Text>Lorem-ipsum</Text>
        <Text>Lorem-ipsum</Text>
      </Card>
    )

    expect(component.getAllByRole('text').length).toBe(3)
  })

  it('should to apply the right color, passed by prop', () => {
    const theme = createTheme()
    const component = renderWithTheme(<Card color="secondary" />)

    expect(component.getByTestId('card-shadow')).toHaveStyle({
      backgroundColor: getThemeColor('secondary')({ theme }),
    })
  })

  it('should to apply the right offset for the card shadow', () => {
    const component = renderWithTheme(<Card offset={10} />)

    expect(component.getByTestId('card-shadow')).toHaveStyle({
      left: -10,
      bottom: -10,
    })
  })
})
