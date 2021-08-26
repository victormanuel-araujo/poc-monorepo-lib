import React, { useEffect, useState } from 'react'

import { Icon, Text, View } from '@components'
import { TouchableOpacity } from 'react-native'

import {
  CheckboxWrapper,
  UncheckedContainer,
  DisabledCheckboxContainer,
  DisabledCheckboxSignal,
  ChildrenWrapper,
  FlatCheckboxContentWrapper,
} from './flat-checkbox.styles'
import { FlatCheckboxProps } from './flat-checkbox.types'

/**
 * Flat Checkbox component, is a simpler checkbox, pretty close to the Checkbox component but without a card
 *
 * @example
 *
 * ```typescript
 * <FlatCheckbox onChange={() => {}}>
 * 	Text to be rendered
 * </FlatCheckbox>
 * ```
 */
export const FlatCheckbox: React.FC<FlatCheckboxProps> = (props) => {
  /**
   * Destructuring props so it's easier to use each prop when necessary
   */
  const {
    size,
    radius,
    children,
    disabled,
    onChange,
    textProps,
    iconProps,
    textSpacing,
    checkedProps,
    uncheckedProps,
    checked: checkedProp,
    ...accessibilityProps
  } = props

  /**
   * Creating the state based on the `checked` variable passed by props to handle the
   * layout necessary changes
   */
  const [checked, setChecked] = useState<boolean>(checkedProp)

  /**
   * This useEffect is always looking for changes on the checked variable received by props.
   * If any update is made to the checked prop, the internal state should update along with it
   */
  useEffect(() => {
    setChecked(() => checkedProp)
  }, [checkedProp])

  /**
   * The below function handles the onPress method to set if it should check or uncheck, also validate
   * the disabled prop, so when is disabled, nothing is done
   */
  const onCheckboxPress = () => {
    if (disabled) return

    setChecked((prevState) => {
      onChange?.(!prevState)
      return !prevState
    })
  }

  return (
    <TouchableOpacity
      testID="flat-checkbox-comp"
      onPress={onCheckboxPress}
      activeOpacity={disabled ? 1 : 0.8}
      accessibilityRole="checkbox"
      {...accessibilityProps}
    >
      <FlatCheckboxContentWrapper disabled={disabled}>
        {!disabled ? (
          <CheckboxWrapper testID="flat-checkbox-enabled-wrapper" radius={radius} checked={checked} {...checkedProps}>
            {checked ? (
              <Icon.Material
                testID="flat-checkbox-checked-icon"
                icon="check"
                shape="none"
                width={size}
                height={size}
                size={size - 4}
                {...checkedProps}
                {...iconProps}
              />
            ) : (
              <UncheckedContainer
                testID="flat-checkbox-unchecked-comp"
                size={size}
                radius={radius}
                {...uncheckedProps}
              />
            )}
          </CheckboxWrapper>
        ) : (
          <DisabledCheckboxContainer testID="flat-checkbox-disabled-wrapper" size={size} radius={radius}>
            {checked ? (
              <Icon.Material
                testID="flat-checkbox-disabled-checked-icon"
                icon="check"
                shape="none"
                width={size}
                height={size}
                size={size - 4}
                color="gray"
              />
            ) : (
              <DisabledCheckboxSignal testID="flat-checkbox-disabled-unchecked-comp" />
            )}
          </DisabledCheckboxContainer>
        )}

        <ChildrenWrapper textSpacing={textSpacing} disabled={disabled} testID="flat-checkbox-children-wrapper">
          {children.constructor === String ? (
            <Text {...textProps}>{children}</Text>
          ) : (
            <View>{children as JSX.Element}</View>
          )}
        </ChildrenWrapper>
      </FlatCheckboxContentWrapper>
    </TouchableOpacity>
  )
}

FlatCheckbox.defaultProps = {
  radius: 4,
  size: 24,
  checked: false,
  disabled: false,
  textSpacing: 'sm',
  textProps: {},
  iconProps: {},
  checkedProps: {
    color: 'white',
    background: 'black',
  },
  uncheckedProps: {
    thickness: 2,
    color: 'black',
  },
}
