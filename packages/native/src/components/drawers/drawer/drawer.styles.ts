import { View } from '@components'
import { getThemeColor, ThemeColorsName, ThemeColorsShade } from '@theme'
import styled from 'styled-components/native'

type BackgroundProps = {
  backgroundColor?: ThemeColorsName
  backgroundColorShade?: keyof ThemeColorsShade
}

export const DrawerContent = styled(View)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.01);
`

export const DrawerOverlay = styled(View)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${getThemeColor('black')};
`

export const DrawerInner = styled(View)<BackgroundProps>`
  width: 100%;
  background-color: ${({ backgroundColor, backgroundColorShade }) =>
    getThemeColor(backgroundColor, backgroundColorShade)};
  border-top-left-radius: ${({ theme }) => theme.paddings.lg}px;
  border-top-right-radius: ${({ theme }) => theme.paddings.lg}px;
  top: 0;
`

export const DrawerBodyOverlay = styled(View)<BackgroundProps>`
  width: 100%;
  height: 150px;
  background-color: ${({ backgroundColor, backgroundColorShade }) =>
    getThemeColor(backgroundColor, backgroundColorShade)};
  top: 99%;
  position: absolute;
  left: 0;
`

export const DrawerCloseButtonWrapper = styled(View)`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 0;
  align-items: center;
  justify-content: center;
`
