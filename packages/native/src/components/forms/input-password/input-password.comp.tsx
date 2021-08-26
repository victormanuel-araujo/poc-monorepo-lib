import * as React from 'react'

import { Button, Icon, InputBase, InputPasswordProps, InputBaseTypes, MaterialIconType } from '@components'
import { ThemeColorsName } from '@theme'

/**
 * The InputPassword is an pre-defined `InputBase`.
 * It have some controls, as password visualization control, password
 * validations and a event handler to help when the user toggle the
 * password visualization
 */
export const InputPassword: React.FC<InputPasswordProps> = ({
  color,
  error,
  visiblePassword,
  value: externalValue,
  validations,
  onSwitchPasswordView,
  onChangeText,
  onBlur,
  ...props
}) => {
  const [visiblePass, setVisiblePass] = React.useState<boolean>(visiblePassword)
  const [value, setValue] = React.useState<string>(externalValue)
  const [invalid, setInvalid] = React.useState<boolean>(false)

  /**
   * Pass trough all of the validators defined in input prop.
   *
   * This function must pass of **every** validators, and all of it must return true.
   * If only one validator catch a `false`, the input will get the `error` prop
   * as `true
   */
  const validatePassword = async (): Promise<boolean> => {
    let valid = true

    // first of all, verify if the validations prop was defined
    // if is not defined, always will return `true`.
    if (validations) {
      if (validations.minLength) {
        valid = value.length >= validations.minLength
        // return the validation if it is false
        if (!valid) return !valid
      }

      if (validations.regex) {
        const reg = new RegExp(validations.regex)
        valid = reg.test(value)
        // return the validation if it is false
        if (!valid) return !valid
      }
    }

    return valid
  } // validatePassword

  /**
   * This function switch the password view, and trigger the `onSwitchPasswordView`
   * function defined (or not) in the component props.
   */
  const handleSwitchViewPassword = () => {
    const newState = !visiblePass
    setVisiblePass(newState)
    if (onSwitchPasswordView) {
      onSwitchPasswordView(newState)
    }
  } // handleSwitchViewPassword

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
   * validate it value, calling the `validatePassword` function
   *
   * @param event - event to bypass to the prop function
   */
  const handleBlur = async (event) => {
    const valid = await validatePassword()
    setInvalid(!valid)

    if (onBlur) {
      onBlur(event)
    }
  } // handleBlur

  /* --- Render values --- */
  const inputType: InputBaseTypes = visiblePass ? 'text' : 'password'
  const endAdornmentIcon: MaterialIconType = visiblePass ? 'visibility-off' : 'visibility'
  const iconColor: ThemeColorsName = invalid ? 'red' : color

  return (
    <InputBase
      startAdornment={<Icon.Material icon="lock" shape="none" size={20} color={iconColor} />}
      {...props}
      error={invalid || error}
      value={value}
      type={inputType}
      endAdornment={
        <Button type="flat" onPress={handleSwitchViewPassword} testID="switch-password-view">
          <Icon.Material icon={endAdornmentIcon} shape="none" size={20} color={iconColor} />
        </Button>
      }
      onChangeText={handleValue}
      onBlur={handleBlur}
    />
  )
}

InputPassword.defaultProps = {
  visiblePassword: false,
  spacing: 'md',
  fluid: true,
  type: 'password',
  color: 'secondary',
  offset: 7,
}
