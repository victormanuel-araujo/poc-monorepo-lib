import * as React from 'react'

import { Text, TextTypes } from '@components'
import { getThemeColor, Theme } from '@theme'
import {
  Animated,
  NativeSyntheticEvent,
  Platform,
  StyleProp,
  TextInputFocusEventData,
  TouchableWithoutFeedback,
} from 'react-native'
import { ThemeContext } from 'styled-components/native'

import {
  InputBaseContent,
  InputBaseShadow,
  InputLabelWrapper,
  StyledInputText,
  FakeInputStyle,
  InputBaseStyled,
  AdornmentView,
  InputBaseLabelContent,
} from './input-base.styles'
import { InputBaseProps } from './input-base.types'

/**
 * Input base is the core of the inputs components. It controls the input state,
 * change, focus and other events.
 * Also, it has an onFocus and onBlur animation, which floats the input, showing
 * its shadow.
 *
 * It has the same props as the `React Native Text Input`
 */
export const InputBase: React.FC<InputBaseProps> = ({
  label,
  type,
  numberOfLines,
  error,
  value: externalValue,
  disabled,
  offset,
  fluid,
  color,
  shade,
  spacing,
  startAdornment,
  startAdornmentProps,
  endAdornment,
  endAdornmentProps,
  style,
  onChangeText,
  onFocus,
  onError,
  onBlur,
  ...props
}: InputBaseProps) => {
  /* --- STATE VALUES --- */
  const [value, setValue] = React.useState<InputBaseProps['value']>(externalValue)
  const [focused, setFocused] = React.useState<boolean>(false)
  const [inputRef, setInputRef] = React.useState(null)
  const [animationFocus] = React.useState<Animated.Value>(new Animated.Value(0))
  const [animationLabel] = React.useState<Animated.Value>(new Animated.Value(0))
  /* --- END OF STATE VALUES --- */
  const theme: Theme = React.useContext(ThemeContext)

  /*
   * In web, we only need a half of the shadow size. This variable set the value of
   * the shadow offset according to the platform
   */

  /*
   * In web, we must apply this styles to the component, the `as any` is because
   * this styles doesnt exist in `native` module, so, without the `as` the lint
   * will throw a type error
   */
  const webStyle = Platform.OS === 'web' && ({ outline: 'none', cursor: 'text' } as any)

  /*
   * Update the internal value everytime our externalValue changes,
   * There's no problem for our own update since React bailouts from
   * redundant updates.
   */
  React.useEffect(() => {
    if (externalValue !== undefined && externalValue !== null) {
      setValue(externalValue)
    }
  }, [externalValue, value])

  /**
   * Always when the error state of the input undergo a change, trigger the
   * `onError` function, defined in the component props
   */
  React.useEffect(() => {
    if (onError) {
      // in case of the input haven't error, the `error` will be `undefined`
      // so, we must to force the type to be a boolean using `!!`
      onError(!!error)
    }
  }, [error])

  /**
   * This effect, exec the animation to the label and the input always when
   * the `focused` or `value` undergo a change
   */
  React.useEffect(() => {
    /**
     * Control the `focus animation`.
     * This animation control the floating of the input element, showing its shadow
     */
    const focusToValue: number = focused ? 1 : 0
    const bounciness: number = focused ? 5 : 1
    Animated.spring(animationFocus, { toValue: focusToValue, bounciness, useNativeDriver: false }).start()

    /**
     * Control the input label animation (only if the input has a label defined)
     * This animation control the font size and alignment of the input label when
     * it has focus
     */
    if (label) {
      const hasValue = value ? value.length > 0 : false
      const labelToValue: number = focused || hasValue ? 1 : 0

      Animated.spring(animationLabel, { toValue: labelToValue, bounciness: 0, useNativeDriver: false }).start()
    }
  }, [focused, animationLabel, animationFocus, value])

  /**
   * Return the input props based on its type
   * Each type must have a specifics props
   */
  const inputPropsByType = (): Partial<InputBaseProps> => {
    switch (type) {
      case 'text':
        return {
          keyboardType: 'default',
          secureTextEntry: false,
        }
      case 'password':
        return {
          keyboardType: 'default',
          secureTextEntry: true,
        }
      case 'email':
        return {
          keyboardType: 'email-address',
          secureTextEntry: false,
        }
      case 'tel':
        return {
          keyboardType: 'phone-pad',
          secureTextEntry: false,
        }
      case 'textarea':
        return {
          keyboardType: 'default',
          secureTextEntry: false,
          numberOfLines: numberOfLines,
          textAlignVertical: 'top',
          multiline: true,
        }
      default:
        return {
          keyboardType: 'default',
          secureTextEntry: false,
        }
    }
  } // inputPropsByType

  /**
   * If the `startAdornment` prop was defined, render the component in the start
   * of the input
   */
  const renderStartAdornment = () => {
    if (startAdornment) {
      return (
        <AdornmentView
          spacing="sm"
          paddingTop={0}
          paddingBottom={0}
          paddingLeft={0}
          alignment="center"
          justifyContent="center"
          {...startAdornmentProps}
        >
          {startAdornment}
        </AdornmentView>
      )
    }
  } // renderStartAdornment

  /**
   * If the `endAdornment` prop was defined, render the component in the end
   * of the input
   */
  const renderEndAdornment = () => {
    if (endAdornment) {
      return (
        <AdornmentView
          spacing="sm"
          paddingTop={0}
          paddingBottom={0}
          paddingRight={0}
          alignment="center"
          justifyContent="center"
          {...endAdornmentProps}
        >
          {endAdornment}
        </AdornmentView>
      )
    }
  } // renderEndAdornment

  /**
   * If the input has an label, render it, and control some values as type of
   * the label and the input type
   */
  const renderLabel = () => {
    const hasValue = value && value.length > 0

    if (!((focused || hasValue) && type === 'textarea') && label) {
      const textType: TextTypes = error ? 'error' : 'input-label'

      return (
        <InputLabelWrapper style={labelInputStyle} type={type}>
          <Text
            type={textType}
            numberOfLines={1}
            ellipsizeMode="tail"
            style={labelTextStyle}
            onPress={() => {
              inputRef.focus()
            }}
          >
            {label}
          </Text>
        </InputLabelWrapper>
      )
    }
  } // renderLabel

  /* --- Handle functions --- */

  /**
   * Validate the onChangeText, exec the prop function if it was defined.
   *
   * @param text - the new value of the input
   */
  const handleOnChangeText = (text: string) => {
    if (!disabled) {
      setValue(text)

      if (onChangeText) {
        onChangeText(text)
      }
    }
  }

  /**
   * Validate the onFocus, exec the prop function if it was defined
   *
   * @param event - default onFocus event data
   */
  const handleOnFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (!disabled) {
      setFocused(true)
      if (onFocus) {
        onFocus(event)
      }
    }
  }

  /**
   * Validate the onBlur, exec the prop function if it was defined
   *
   * @param event - default onBlur event data
   */
  const handleOnBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (!disabled) {
      setFocused(false)
      if (onBlur) {
        onBlur(event)
      }
    }
  }

  /* --- Render values --- */

  const hasLabel: boolean = label && label.length > 0
  const inputProps: Partial<InputBaseProps> = inputPropsByType()

  // interpolations to the input floating animation

  const offsetInputX: Animated.AnimatedInterpolation = animationFocus.interpolate({
    inputRange: [0, 1],
    outputRange: [0, offset],
  })
  const offsetInputY: Animated.AnimatedInterpolation = animationFocus.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -offset],
  })
  const borderColor: Animated.AnimatedInterpolation = animationFocus.interpolate({
    inputRange: [0, 1],
    outputRange: [getThemeColor('gray', 'light')({ theme }), getThemeColor('black', 'light')({ theme })],
  })

  // interpolation to input label

  const labelPositionY: Animated.AnimatedInterpolation = animationLabel.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10],
    extrapolate: 'clamp',
  })
  const labelFontSize: Animated.AnimatedInterpolation = animationLabel.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.fontSizes.md, (theme.fontSizes.md / 100) * 80],
  })

  /**
   * Apply the style to the `FakeInput` element in Mobile.
   * Use the interpolation values to animate it to float and show its shadow
   *
   * OBS: the `any` StyleProp, is because the `transform` is incompatible with
   * the interpolation value
   */
  const fakeInputStyleMobile: StyleProp<any> = {
    transform: [{ translateX: offsetInputX }, { translateY: offsetInputY }],
    borderColor: error ? getThemeColor('red')({ theme }) : borderColor,
  }

  /**
   * Returning the border color according to the input state
   * Getting the side effects of the input states
   */
  const getBorderColor = (hovered: boolean) => {
    if (error) {
      return getThemeColor('red')({ theme })
    }

    if (hovered && !focused) {
      return getThemeColor('secondary')({ theme })
    }

    return getThemeColor('gray', 'light')({ theme })
  }

  /**
   * Apply the style to the `FakeInput` element in Web, using hover.
   * Use the interpolation values to animate it to float and show its shadow
   *
   * OBS: the `any` StyleProp, is because the `transform` is incompatible with
   * the interpolation value
   */
  const fakeInputStyleWeb = (hovered: boolean): StyleProp<any> => {
    return {
      transform: [{ translateX: offsetInputX }, { translateY: offsetInputY }],
      borderColor: getBorderColor(hovered),
    }
  }

  /**
   * Apply the style to the `InputLabelWrapper`
   * Use the interpolation values to animate and realign the input label wrapper
   *
   * OBS: the `any` StyleProp, is because the `transform` is incompatible with
   * the interpolation value
   */
  const labelInputStyle: StyleProp<any> = {
    transform: [{ translateY: labelPositionY }],
  }

  /**
   * Apply the font-size animation to the input label
   *
   * OBS: the `any` StyleProp, is because the `fontSize` is incompatible with
   * the interpolation value
   */
  const labelTextStyle: StyleProp<any> = {
    fontSize: labelFontSize,
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        inputRef.focus()
      }}
    >
      <InputBaseStyled style={[webStyle, style]} fluid={fluid}>
        <InputBaseContent onLayout={() => null}>
          <InputBaseShadow color={color} shade={shade} error={error} testID="input-base-shadow" />
          <FakeInputStyle spacing={spacing} style={fakeInputStyleMobile} disabled={disabled} focused={focused}>
            {renderStartAdornment()}

            <InputBaseLabelContent hasLabel={hasLabel}>
              {renderLabel()}
              <StyledInputText
                ref={setInputRef}
                style={{ ...webStyle }}
                value={value}
                onChangeText={handleOnChangeText}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                editable={!disabled}
                type={type}
                label={label}
                color={color}
                shade={shade}
                {...inputProps}
                {...props}
                testID="input-base"
              />
            </InputBaseLabelContent>

            {renderEndAdornment()}
          </FakeInputStyle>
        </InputBaseContent>
      </InputBaseStyled>
    </TouchableWithoutFeedback>
  )
}

InputBase.defaultProps = {
  spacing: 'md',
  fluid: true,
  type: 'text',
  color: 'secondary',
  offset: Platform.OS === 'web' ? 4 : 7,
  numberOfLines: 3,
}
