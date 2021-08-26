import * as React from 'react'

import { View, Text, HeaderProps } from '@components'

import { StyledHeader, AdornmentView, AdornmentAction } from './header.styles'

/**
 * The header is a navigation component, witch give some pre-definitions and
 * some customizations that a header needs, as example: `rightAdornment`,
 * `rightAction`, `leftAdornment` and `leftAction.
 */
export const Header: React.FC<HeaderProps> = ({
  title,
  titleAlignment,
  titleProps,
  leftAdornment,
  leftAdornmentProps,
  rightAdornment,
  rightAdornmentProps,
  leftAction,
  rightAction,
  backgroundColor,
  backgroundShade,
  textColor,
  ...props
}) => {
  /**
   * Handle with the leftAction when the user press the left adornment.
   * This prop isn't required, so, is necessary to verify if it was defined
   * correctly
   */
  const handleLeftAction = () => {
    if (leftAction) {
      leftAction()
    }
  }

  /**
   * Handle with the rightAction when the user press the right adornment.
   * This prop isn't required, so, is necessary to verify if it was defined
   * correctly
   */
  const handleRightAction = () => {
    if (rightAction) {
      rightAction()
    }
  }

  /**
   * this function render the directional adornment, if it was defined correctly
   * @param direction - left or right adornment
   */
  const renderAdornment = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      return leftAdornment
    }

    if (direction === 'right') {
      return rightAdornment
    }

    throw new Error('Invalid adornment direction: ' + direction)
  } // renderAdornment

  return (
    <StyledHeader
      accessibilityRole="header"
      backgroundColor={backgroundColor}
      backgroundShade={backgroundShade}
      {...props}
    >
      <AdornmentView {...leftAdornmentProps}>
        <AdornmentAction testID="left-action" disabled={!leftAction} onPress={handleLeftAction}>
          {renderAdornment('left')}
        </AdornmentAction>
      </AdornmentView>
      <View flex={1}>
        <Text
          numberOfLines={1}
          color={textColor}
          ellipsizeMode="tail"
          align={titleAlignment}
          weight="bold"
          {...titleProps}
        >
          {title}
        </Text>
      </View>
      <AdornmentView {...rightAdornmentProps}>
        <AdornmentAction testID="right-action" disabled={!rightAction} onPress={handleRightAction}>
          {renderAdornment('right')}
        </AdornmentAction>
      </AdornmentView>
    </StyledHeader>
  )
}

Header.defaultProps = {
  titleAlignment: 'center',
  backgroundColor: 'white',
  textColor: 'black',
  backgroundShade: 'base',
}
