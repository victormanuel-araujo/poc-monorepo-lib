import * as React from 'react'

import { Icon, InputBase, InputEmailProps } from '@components'
import { ThemeColorsName } from '@theme'

const EMAILREGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i

/**
 * The InputEmail is an pre-defined `InputBase`.
 * They have a regex validation for valid email.
 */
export const InputEmail: React.FC<InputEmailProps> = ({
  color,
  error,
  value: externalValue,
  validations,
  onChangeText,
  onBlur,
  ...props
}) => {
  const [value, setValue] = React.useState<string>(externalValue)
  const [invalid, setInvalid] = React.useState<boolean>(false)

  /**
   * Pass trough all of the validators defined in input prop.
   *
   * This function must pass of **every** validators, and all of it must return true.
   * If only one validator catch a `false`, the input will get the `error` prop
   * as `true
   */
  const validateEmail = (): boolean => {
    if (value && !EMAILREGEX.test(value)) {
      // return the validation if it is false
      return false
    }

    // first of all, verify if the validations prop was defined
    // if is not defined, always will return `true`.
    if (validations && validations.regex) {
      const reg = new RegExp(validations.regex)
      // return the validation if it is false
      return reg.test(value)
    }

    return true
  } // validateEmail

  /**
   * Handle with the value change on the input, to save it value in a local state
   *
   * @param newValue - the new value of the input
   */
  const handleValue = (newValue: string) => {
    setValue(newValue)
    if (onChangeText) {
      onChangeText(newValue)
    }
  } // handleValue

  /**
   * Handle with the `onBlur` event. Always when the blur occur, the input will
   * validate it value, calling the `validateEmail` function
   *
   * @param event - event to bypass to the prop function
   */
  const handleBlur = (event) => {
    const valid = validateEmail()
    setInvalid(!valid)

    if (onBlur) {
      onBlur(event)
    }
  } // handleBlur

  /* --- Render values --- */
  const iconColor: ThemeColorsName = invalid ? 'red' : color
  return (
    <InputBase
      startAdornment={<Icon.Material icon="email" shape="none" size={20} color={iconColor} />}
      {...props}
      error={invalid || error}
      value={value ?? ''}
      type="email"
      onChangeText={handleValue}
      onBlur={handleBlur}
      testID={'input-base-email'}
    />
  )
}

InputEmail.defaultProps = {
  spacing: 'md',
  fluid: true,
  type: 'email',
  color: 'secondary',
  offset: 7,
}
