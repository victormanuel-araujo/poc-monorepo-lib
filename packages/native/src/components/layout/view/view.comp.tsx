import * as React from 'react'

import { StyledView } from './view.styles'
import { ViewProps } from './view.types'

/**
 * The View component is a simple `React Native View`, with the controllers and presets
 * of the theme
 *
 * This component may be used to compose a screen view, grids or any types of layout
 *
 * @param children
 * @param props
 */
export const View: React.FC<ViewProps> = ({ children, ...props }: ViewProps) => {
  return (
    <StyledView testID="view" {...props}>
      {children}
    </StyledView>
  )
}

View.defaultProps = {
  display: 'flex',
  position: 'relative',
  backgroundShade: 'base',
  dir: 'column',
}
