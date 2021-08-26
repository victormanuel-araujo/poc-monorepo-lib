import * as React from 'react'

import { useWindowDimensions } from 'react-native'

import { StyledScreen } from './screen.styles'
import { ScreenProps } from './screen.types'

/**
 * The Screen component is a simple `React Native Container`, with the controllers and presets
 * of the theme
 *
 * This component may be used to compose a screen view, grids or any types of layout
 *
 */

export const Screen: React.FC<ScreenProps> = ({ children, ...props }: ScreenProps) => {
  const { width, height } = useWindowDimensions()
  return (
    <StyledScreen testID="screen" width={width} height={height} {...props}>
      {children}
    </StyledScreen>
  )
}

Screen.defaultProps = {
  background: 'white',
}
