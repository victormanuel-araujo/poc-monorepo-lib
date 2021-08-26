import { ProgressBarProps, View } from '@components'
import { getThemeColor } from '@theme'
import styled, { css } from 'styled-components/native'

/**
 * Apply the border radius style, using the unit base of theme.
 * This style is used one more time
 */
function borderRadius() {
  return css`
    border-radius: ${({ theme }) => theme.units.base}px;
  `
}

export const ProgressBarContent = styled(View)`
  width: 100%;
  position: relative;
  display: flex;
  flex: 1;
`

export const ProgressBarLine = styled(View)<
  Pick<ProgressBarProps, 'background' | 'backgroundShade' | 'backgroundOpacity'>
>`
  width: 100%;
  height: 6px;
  background-color: ${({ background, backgroundShade }) => getThemeColor(background, backgroundShade)};
  opacity: ${({ backgroundOpacity }) => backgroundOpacity};

  ${borderRadius}
`

export const ProgressBarIndicator = styled(View)<
  Pick<ProgressBarProps, 'value' | 'progressBackground' | 'progressBackgroundShade'>
>`
  position: absolute;
  left: 0;
  top: -2px;
  background-color: ${({ progressBackground, progressBackgroundShade }) =>
    getThemeColor(progressBackground, progressBackgroundShade)};
  height: 10px;
  border-color: #000;
  border-width: ${({ value }) => (value > 0 ? '1' : '0')}px;

  ${borderRadius}
`
