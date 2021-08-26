import React from 'react'

import { View, Text } from '@components'
import { fireEvent } from '@testing-library/react-native'
import { createTheme, getThemeColor, renderWithTheme } from '@theme'

import { FlatCheckbox } from './flat-checkbox.comp'

describe('Flat Checkbox component', () => {
  const defaultOnChangeFn = jest.fn()

  it('should render correctly and match snapshot', () => {
    const flatCheckbox = renderWithTheme(<FlatCheckbox onChange={defaultOnChangeFn}>Lorem Ipsum</FlatCheckbox>)

    expect(flatCheckbox.getByText('Lorem Ipsum')).toBeTruthy()
    expect(flatCheckbox.toJSON()).toMatchSnapshot()
  })

  it('should render correctly with custom children', () => {
    const flatCheckbox = renderWithTheme(
      <FlatCheckbox onChange={defaultOnChangeFn}>
        <View spacing="lg">
          <Text>Text inside</Text>
        </View>
      </FlatCheckbox>
    )

    expect(flatCheckbox).toBeTruthy()
  })

  it('should call onChange prop function when not disabled and component is pressed', () => {
    const onChangeFn = jest.fn()
    const flatCheckbox = renderWithTheme(<FlatCheckbox onChange={onChangeFn}>Lorem Ipsum</FlatCheckbox>)

    const touchableFlatCheckbox = flatCheckbox.getByTestId('flat-checkbox-comp')
    fireEvent.press(touchableFlatCheckbox)
    fireEvent.press(touchableFlatCheckbox)
    fireEvent.press(touchableFlatCheckbox)
    expect(onChangeFn).toBeCalledTimes(3)
  })

  it('should not call onChange prop function when disabled and component is pressed', () => {
    const onChangeFn = jest.fn()
    const flatCheckbox = renderWithTheme(
      <FlatCheckbox disabled onChange={onChangeFn}>
        Lorem Ipsum
      </FlatCheckbox>
    )

    const touchableFlatCheckbox = flatCheckbox.getByTestId('flat-checkbox-comp')
    fireEvent.press(touchableFlatCheckbox)
    fireEvent.press(touchableFlatCheckbox)
    fireEvent.press(touchableFlatCheckbox)
    expect(onChangeFn).toBeCalledTimes(0)
  })

  it('should render the checked icon when checked prop is true', () => {
    const checkedIcon = renderWithTheme(
      <FlatCheckbox checked onChange={defaultOnChangeFn}>
        Lorem Ipsum
      </FlatCheckbox>
    ).getByTestId('flat-checkbox-checked-icon')

    expect(checkedIcon).toBeTruthy()
  })

  it('should not render the checked icon when checked prop is false', () => {
    const uncheckedComp = renderWithTheme(
      <FlatCheckbox onChange={defaultOnChangeFn}>Lorem Ipsum</FlatCheckbox>
    ).getByTestId('flat-checkbox-unchecked-comp')

    expect(uncheckedComp).toBeTruthy()
  })

  it('should render the disabled without the checked icon when disabled is true and checked prop is false', () => {
    const disabledUncheckedComp = renderWithTheme(
      <FlatCheckbox disabled onChange={defaultOnChangeFn}>
        Lorem Ipsum
      </FlatCheckbox>
    ).getByTestId('flat-checkbox-disabled-unchecked-comp')

    expect(disabledUncheckedComp).toBeTruthy()
  })

  it('should render the disabled with the checked icon when disabled and checked prop is true', () => {
    const disabledCheckedComp = renderWithTheme(
      <FlatCheckbox disabled checked onChange={defaultOnChangeFn}>
        Lorem Ipsum
      </FlatCheckbox>
    ).getByTestId('flat-checkbox-disabled-checked-icon')

    expect(disabledCheckedComp).toBeTruthy()
  })

  it('should respect and apply the checked props when checked', () => {
    const theme = createTheme()
    const flatCheckbox = renderWithTheme(
      <FlatCheckbox checked checkedProps={{ color: 'red', background: 'yellow' }} onChange={defaultOnChangeFn}>
        Lorem Ipsum
      </FlatCheckbox>
    )

    const checkedIcon = flatCheckbox.getByTestId('flat-checkbox-checked-icon')
    const checkedWrapperComp = flatCheckbox.getByTestId('flat-checkbox-enabled-wrapper')

    expect(checkedIcon).toBeTruthy()
    expect(checkedIcon).toHaveStyle({ color: getThemeColor('red')({ theme }) })
    expect(checkedWrapperComp).toHaveStyle({ backgroundColor: getThemeColor('yellow')({ theme }) })
  })

  it('should respect and apply the unchecked props when not checked', () => {
    const flatCheckbox = renderWithTheme(
      <FlatCheckbox uncheckedProps={{ thickness: 4, color: 'primary' }} onChange={defaultOnChangeFn}>
        Lorem Ipsum
      </FlatCheckbox>
    )
    const uncheckedComp = flatCheckbox.getByTestId('flat-checkbox-unchecked-comp')

    expect(uncheckedComp).toBeTruthy()
    expect(uncheckedComp).toHaveProp('color', 'primary')
    expect(uncheckedComp).toHaveStyle({ borderWidth: 4 })
  })

  it('should apply text props on the children when is a string', () => {
    const theme = createTheme()
    const flatCheckbox = renderWithTheme(
      <FlatCheckbox textProps={{ color: 'primary', size: 'lg' }} onChange={defaultOnChangeFn}>
        Lorem Ipsum
      </FlatCheckbox>
    )

    const textComponent = flatCheckbox.getByText('Lorem Ipsum')
    expect(textComponent).toBeTruthy()
    expect(textComponent).toHaveStyle({ color: getThemeColor('primary')({ theme }), fontSize: theme.fontSizes.lg })
  })
})
