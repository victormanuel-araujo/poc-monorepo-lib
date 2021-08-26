import { ThemeColorsName, ThemeColorsShade, ThemePaddings } from '@theme'
import { AccessibilityProps } from 'react-native'

/**
 * Had to specify the path to the types file because if I didn't, the client will not understand the actual type to be used,
 * the exported interface name is the same as the exported by `react-native` and importing from an index file makes typescript confused.
 * I'm not sure if this behavior occurs when it gets published, would be nice to review this later
 */
import { MaterialIconProps } from '../../icons/material/material.types'
import { TextProps } from '../../typography/text/text.types'

interface FlatCheckboxVariantCommonProps {
  /**
   * Specify the color to be used by the variant
   */
  color: ThemeColorsName

  /**
   * Specify the shade to be used by the variant
   *
   * @default "base"
   */
  shade?: keyof ThemeColorsShade
}

/**
 * This interface extends the `color` and `shade` props and apply to the border when the checked state is false.
 */
export interface FlatCheckboxUncheckedBorder extends FlatCheckboxVariantCommonProps {
  /**
   * Determine the border width value for when is unchecked
   *
   * @default 2
   */
  thickness?: number
}

/**
 * This interface extends the `color` and `shade` props and apply to the checked icon when the checked state is true
 */
export interface FlatCheckboxCheckedProps extends FlatCheckboxVariantCommonProps {
  /**
   * Determine background color to render with the checked icon
   *
   * @default "black"
   */
  background: ThemeColorsName

  /**
   * Determine the background shade for the background color to render with the checked icon
   *
   * @default "base"
   */
  backgroundShade?: keyof ThemeColorsShade
}

export interface FlatCheckboxProps extends AccessibilityProps {
  /**
   * The `children` prop it can be a string that will be rendered along with the checkbox, it also can be
   * a single or more components and keeps the same rules as the string
   *
   * @default `undefined`
   */
  children: string | React.ReactNode

  /**
   * The `onChange` prop is a function that needs to receive a boolean value and should return nothing
   * It is required to the full FlatCheckbox component functionality
   *
   * @default `undefined`
   */
  onChange(value: boolean): void

  /**
   * The `checked` prop is a boolean value that determines the first state inside the component
   * and rules every change, so if this prop changes it's value, the component will change too to match it.
   *
   * @default false
   */
  checked?: boolean

  /**
   * The `disable` prop specifies if the component will allow any interaction with it. It changes the layout
   * to show that it is not available to check or uncheck, show the current status and handles the cursor on web
   *
   * @default false
   */
  disabled?: boolean

  /**
   * Specefies how the component should handle when is checked, having the color and shade for the icon and
   * background and backgroundShade for the background itself
   */
  checkedProps?: FlatCheckboxCheckedProps

  /**
   * Specifies how the component should handle when is unchecked, by passing the color and the shade to the
   * border-color style be correctly setted, also has a `thickness` param to set the border-width value.
   */
  uncheckedProps?: FlatCheckboxUncheckedBorder

  /**
   * Change directly the width and height of the checkbox container and set the check icon size too
   *
   * @default 24
   */
  size?: number

  /**
   * Specify the border radius of the checkbox wrapper component
   *
   * @default 4
   */
  radius?: number

  /**
   * Specify the space between the text and the checkbox using the theme padding values
   *
   * @default "sm"
   */
  textSpacing?: keyof ThemePaddings

  /**
   * The `textProps` is an optional prop that accepts all the props the Text component would receive, except for children,
   * and send it to children text wrapper component, everything passed from this props will be applied to the text.
   * In case the children is not a string this prop is not useful.
   *
   * @default {}
   */
  textProps?: Omit<TextProps, 'children'>

  /**
   * The `iconProps` is an optional prop that accepts all the props the Icon.Material component would receive,
   * except for size, width and height, and send it to the check icon component if the disabled prop is false
   *
   * @default {}
   */
  iconProps?: Omit<MaterialIconProps, 'size' | 'width' | 'height' | 'icon'>
}
