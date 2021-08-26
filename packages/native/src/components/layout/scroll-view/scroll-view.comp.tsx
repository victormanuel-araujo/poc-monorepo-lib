import React from 'react'

import { View } from '@components'

import { StyledScrollView } from './scroll-view.styles'
import { ScrollViewProps } from './scroll-view.types'

/**
 * A simple Smash View wrapped by a ScrollView.
 *
 * It has the same props as the Smash View component.
 * It also adds display flex and flex 1 by default.
 *
 * @see {ViewProps}
 */
export const ScrollView: React.FC<ScrollViewProps> = ({
  spacing,
  customMultiplier,
  background,
  backgroundShade,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingTop,
  display,
  flex,
  width,
  position,
  dir,
  alignment,
  justifyContent,
  children,
  ...props
}) => {
  const viewProps = {
    spacing,
    customMultiplier,
    background,
    backgroundShade,
    paddingRight,
    paddingBottom,
    paddingLeft,
    paddingTop,
    display,
    flex,
    width,
    position,
    dir,
    alignment,
    justifyContent,
    children,
  }

  return (
    <StyledScrollView {...props}>
      <View {...viewProps} />
    </StyledScrollView>
  )
}

ScrollView.defaultProps = {
  keyboardDismissMode: 'interactive',
  keyboardShouldPersistTaps: 'never',
  backgroundColor: 'white',
}
