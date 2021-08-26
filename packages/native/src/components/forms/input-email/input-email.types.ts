import { InputBaseProps } from '@components'

/**
 * The possible validations to the input,
 *
 * Always when the `onBlur` event was triggered, the component will pass through
 * all of this validations, and all of it must return true, otherwise, the input
 * will receive the `error` prop as true
 */
export type InputEmailValidations = {
  /**
   * Create a regex to test the value of the input when it gets blur.
   * Important: The value will be tested in that syntax `regex.test(value)`
   */
  regex?: RegExp
}

/**
 * The composition of the input email props.
 * It extends the `InputBaseProps`, so, any prop of the default input can be
 * passed to it.
 *
 * @see InputBaseProps
 */
export interface InputEmailProps extends InputBaseProps {
  /**
   * Apply a email validation, always when the input trigger the `onBlur`
   * event.
   * Use an object to pass more than one validation.
   */
  validations?: InputEmailValidations
}
