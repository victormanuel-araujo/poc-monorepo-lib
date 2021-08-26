import React from 'react'

import { Text, Accordion, AccordionProps } from '@components'
import { createTheme, getThemeColor } from '@theme'
import { get } from 'lodash'

import { renderWithTheme } from '../../../theme/theme.fixture'

describe('Accordion Component', () => {
  it('should render the children correctly', () => {
    const component = renderWithTheme(
      <Accordion>
        <Text>lorem-ipsum</Text>
      </Accordion>
    )

    expect(component.getByText('lorem-ipsum')).toBeDefined()
  })

  it('should have the default props', () => {
    const component = renderWithTheme(<Accordion />)
    const props: AccordionProps = get(component, ['container', 'props', 'children', 'props'], {})

    expect(props.title).toBe(undefined)
    expect(props.expanded).toBe(false)
  })

  it('should to render multiple children', () => {
    const accordionComponent = renderWithTheme(
      <Accordion>
        <Text>Lorem-ipsum</Text>
        <Text>Lorem-ipsum</Text>
        <Text>Lorem-ipsum</Text>
      </Accordion>
    )

    expect(accordionComponent.getAllByText('Lorem-ipsum').length).toBe(3)
  })

  it('should to apply the right color, passed by prop', () => {
    const theme = createTheme()
    const component = renderWithTheme(<Accordion color="secondary" />)

    expect(component.getByTestId('card-shadow')).toHaveStyle({
      backgroundColor: getThemeColor('secondary')({ theme }),
    })
  })

  it('should to apply the right offset for the card shadow', () => {
    const component = renderWithTheme(<Accordion offset={10} />)

    expect(component.getByTestId('card-shadow')).toHaveStyle({
      left: -10,
      bottom: -10,
    })
  })
})
