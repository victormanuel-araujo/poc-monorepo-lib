import { InputBaseProps, ButtonProps } from '@components'

export interface InputSearchProps extends InputBaseProps {
  /**
   * Called when the user clears the input
   */
  onClear?(): void

  /**
   * The underlying clear button props
   */
  clearButtonProps?: Omit<ButtonProps, 'children'>
}
