import React from 'react'

import { Text, Icon, CheckboxProps, View } from '@components'
import { getThemeColor, Theme } from '@theme'
import { Animated, Platform, StyleProp, TouchableWithoutFeedback } from 'react-native'
import { ThemeContext } from 'styled-components/native'

import {
  CheckboxContent,
  CheckboxShadow,
  CheckboxStyled,
  CheckboxView,
  IconCheckedView,
  IconCheckViewWrapper,
  IconWrapper,
  LabelWrapper,
} from './checkbox.styles'

/**
 * The Checkbox is simple component commonly used to approve or select something.
 * It controls checked state and change.
 * Also, it has an onChange animation, which floats the checkbox, showing its shadow.
 */
export const Checkbox: React.FC<CheckboxProps> = ({ fluid, checked: value, ...props }) => {
  const [checked, setChecked] = React.useState(value)
  const [animationChecked] = React.useState<Animated.Value>(new Animated.Value(0))

  const theme: Theme = React.useContext(ThemeContext)

  /**
   * This effect guarantee always when the `checked` prop undergo a change, the
   * local state will be updated and sync
   */
  React.useEffect(() => {
    setChecked(value)
  }, [value])

  /**
   * This effect, exec the animation to the checkbox container always when
   * the `checked` undergo a change
   */
  React.useEffect(() => {
    /**
     * Control the `checked animation`.
     * This animation control the floating of the checkbox element, showing its shadow
     */
    const toValue: number = checked ? 1 : 0
    const bounciness: number = checked ? 5 : 0
    Animated.spring(animationChecked, { toValue, bounciness, useNativeDriver: false }).start()
  }, [checked, animationChecked])

  /**
   * Used to handle with the toggle check and call the onChange function
   */
  const handleCheck = () => {
    const newValue = !checked
    if (!props.disabled) {
      setChecked(newValue)
      if (props.onChange) {
        props.onChange(newValue)
      }
    }
  }

  /* --- Interpolation to the checkbox floating animation --- */

  const offsetCheckboxX: Animated.AnimatedInterpolation = animationChecked.interpolate({
    inputRange: [0, 1],
    outputRange: [0, props.offset],
  })
  const offsetCheckboxY: Animated.AnimatedInterpolation = animationChecked.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -props.offset],
  })

  const backgroundColor: Animated.AnimatedInterpolation = animationChecked.interpolate({
    inputRange: [0, 1],
    outputRange: [
      getThemeColor(props.uncheckedBackgroundColor, props.uncheckedBackgroundColorShade)({ theme }),
      getThemeColor(props.checkedBackgroundColor, props.checkedBackgroundColorShade)({ theme }),
    ],
  })
  const borderColor: Animated.AnimatedInterpolation = animationChecked.interpolate({
    inputRange: [0, 1],
    outputRange: [
      getThemeColor(props.uncheckedBorderColor, props.uncheckedBorderColorShade)({ theme }),
      getThemeColor(props.checkedBorderColor, props.checkedBorderColorShade)({ theme }),
    ],
  })
  const _labelColor: Animated.AnimatedInterpolation = animationChecked.interpolate({
    inputRange: [0, 1],
    outputRange: [
      getThemeColor(props.uncheckedLabelColor, props.uncheckedLabelColorShade)({ theme }),
      getThemeColor(props.checkedLabelColor, props.checkedLabelColorShade)({ theme }),
    ],
  })

  /**
   * Apply the style to the `Checkbox` element.
   * Use the interpolation values to animate the fluctuation and show the shadow
   *
   * OBS: the `any` StyleProp, is because the `transform` is incompatible with
   * the interpolation value
   */
  const styledCheckbox: StyleProp<any> = {
    transform: [{ translateX: offsetCheckboxX }, { translateY: offsetCheckboxY }],
    borderColor,
    backgroundColor,
  }

  /**
   * Apply an disabled style to the checkbox
   */
  const disabledStyle: StyleProp<any> = {
    backgroundColor: getThemeColor('gray', 'lighter')({ theme }),
  }

  /**
   * Apply the style to the `Text` element (checkbox label).
   * Use the interpolation values to animate it with color transition
   *
   * OBS: the `any` StyleProp, is because the `transform` is incompatible with
   * the interpolation value
   */
  const labelColor: StyleProp<any> = {
    color: _labelColor,
  }

  return (
    <CheckboxStyled width={fluid ? '100%' : 'auto'} disabled={props.disabled} accessibilityRole="checkbox">
      <TouchableWithoutFeedback onPress={handleCheck} testID="checkbox" {...props}>
        <CheckboxContent width={fluid ? '100%' : 'auto'}>
          <CheckboxShadow />
          <CheckboxView
            width={fluid ? '100%' : 'auto'}
            style={props.disabled ? disabledStyle : styledCheckbox}
            spacing={props.spacing}
          >
            <IconWrapper>
              <IconCheckedView testID="checked-icon" disabled={props.disabled}>
                {checked && (
                  <IconCheckViewWrapper style={{ opacity: animationChecked }}>
                    <Icon.Material shape="none" size={18} icon="done" />
                  </IconCheckViewWrapper>
                )}
              </IconCheckedView>
            </IconWrapper>
            <LabelWrapper
              width="auto"
              spacing="md"
              paddingTop={0}
              paddingRight={0}
              paddingBottom={0}
              disabled={props.disabled}
            >
              <Text style={labelColor} weight="medium">
                {props.label}
              </Text>
            </LabelWrapper>
          </CheckboxView>
        </CheckboxContent>
      </TouchableWithoutFeedback>
    </CheckboxStyled>
  )
}

Checkbox.defaultProps = {
  fluid: true,
  spacing: 'md',
  checkedBorderColor: 'black',
  uncheckedBorderColor: 'black',
  checkedBackgroundColor: 'secondary',
  uncheckedBackgroundColor: 'white',
  checkedLabelColor: 'white',
  uncheckedLabelColor: 'black',
  offset: Platform.OS === 'web' ? 4 : 7,
}
