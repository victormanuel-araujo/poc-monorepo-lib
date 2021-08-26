import { InputBaseProps } from '@components'

/**
 * The possible validations to the input,
 *
 * Always when the `onBlur` event was triggered, the component will pass through
 * all of this validations, and all of it must return true, otherwise, the input
 * will receive the `error` prop as true
 */
export type InputPasswordValidations = {
  /**
   * Means the input must have a minimum characters length
   *
   * @default `undefined
   */
  minLength?: number

  /**
   * Create a regex to test the value of the input when it gets blur.
   * Important: The value will be tested in that syntax `regex.test(value)`
   *
   * @default `undefined`
   */
  regex?: RegExp
}

/**
 * The composition of the input password props.
 * It extends the `InputBaseProps`, so, any prop of the default input can be
 * passed to it.
 *
 * @see InputBaseProps
 */
export interface InputPasswordProps extends InputBaseProps {
  /**
   * Define if the password can be visible since beginning.
   * This is an initial state to the visibility of the password.
   *
   * @default `false`
   */
  visiblePassword?: boolean

  /**
   * Apply a password validation, always when the input trigger the `onBlur`
   * event.
   * Use an object to pass more than one validation.
   *
   * @default `undefined`
   */
  validations?: InputPasswordValidations

  /**
   * Trigger an event, always when the user toggle the password visualization.
   * The new state is `true` when the password can be read and `false` when
   * it cannot be read.
   *
   * @default `undefined`
   */
  onSwitchPasswordView?(newState: boolean): void
}
