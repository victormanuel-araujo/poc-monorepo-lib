import { InputBaseProps, InputBaseStyledProps, View } from '@components'
import { getThemeColor, ThemedProps } from '@theme'
import { TextInput, Platform, Animated } from 'react-native'
import styled, { css } from 'styled-components/native'

/**
 * Control the input padding based on the platform and the input type
 * If the input type is 'textarea' it must have a custom padding style
 * to the mobile, and another to the web client
 */
function paddingInput({ type }: ThemedProps<InputBaseProps>) {
  const defaultPadding = '0 0 0 0'
  const mobilePadding = `10px 0 13px 0`
  const desktopPadding = '10px 0 20px 0'

  const finalPadding = Platform.OS === 'web' ? desktopPadding : mobilePadding
  const padding = type === 'textarea' ? finalPadding : defaultPadding

  return css`
    padding: ${padding};
  `
} // paddingInput

/**
 * Apply the padding style to the `FakeInput`, it must apply the half of the
 * unit base in padding top and bottom, and the custom padding left and right
 * based on the `spacing` prop
 */
function padding() {
  const divisor = Platform.OS === 'web' ? 1 : 4
  return css`
    padding: ${({ theme }) => theme.units.base / divisor}px
      ${({ theme, spacing }: ThemedProps<InputBaseProps>) => theme.paddings[spacing]}px;
  `
} // padding

/**
 * Apply the input border Radius.
 * It is used in more of one place
 */
function borderRadius() {
  return css`
    border-radius: ${({ theme }) => theme.units.radius}px;
  `
} // borderRadius

/**
 * Control the Text Input height and some alignment styles.
 *
 * Each one Platform must have ans specific style to keep the Input value
 * aligned to the input Label.
 */
function inputHeight({ label }: ThemedProps<InputBaseProps>) {
  // return the android style
  if (Platform.OS === 'android' || Platform.OS === 'ios') {
    const hasLabel: boolean = label ? label.length > 0 : false
    const paddingTop: number = hasLabel ? 15 : 0
    return css`
      flex: 1;
      padding-top: ${paddingTop}px;
    `
  }

  // return the style to web
  return css`
    flex: 1;
    z-index: 1;
    
    padding-top: 18px;
  `
} // inputHeight

/* ----------------------- */

export const AdornmentView = styled(View)`
  position: relative;
  width: auto;
`

export const InputBaseStyled = styled(View)<{ fluid?: boolean }>`
  width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
  display: flex;
  flex-direction: row;
  padding: 0;
  position: relative;
`

export const InputBaseContent = styled(View)`
  width: 100%;
  position: relative;
  flex-direction: row;
  padding: 0;
  min-height: 54px;
`

export const InputBaseShadow = styled(View)<ThemedProps<InputBaseProps & InputBaseStyledProps>>`
  width: 100%;
  height: 100%;
  padding: 0;
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${({ color, shade, error }) => getThemeColor(error ? 'red' : color, error ? 'base' : shade)};

  ${borderRadius}
`

export const FakeInputStyle = styled(Animated.View)<ThemedProps<InputBaseProps & InputBaseStyledProps>>`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: ${({ disabled }) => getThemeColor(disabled ? 'gray' : 'white', disabled ? 'lighter' : 'base')};
  min-height: 54px;
  border: 1px solid;

  ${borderRadius}
  ${padding}
`

export const StyledInputText = styled(TextInput)<ThemedProps<InputBaseProps & InputBaseStyledProps>>`
  color: ${getThemeColor('black')};
  ${paddingInput}
  ${inputHeight};
`

export const InputLabelWrapper = styled(Animated.View)<
  ThemedProps<InputBaseProps & InputBaseStyledProps & { style: any }>
>`
  width: auto;
  position: absolute;
  height: ${({ type }) => (type === 'textarea' ? '37px' : '100%')};
  justify-content: center;
  left: 0;
  top: 0;
  padding: 0;
`

export const InputBaseLabelContent = styled(View)<{ hasLabel?: boolean }>`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: ${({ hasLabel }) => (hasLabel ? 'flex-end' : 'center')};
`
