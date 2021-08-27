import React from 'react'

import { getThemeColor, Theme, ThemeColorsName } from '@theme'
import { ActivityIndicator, GestureResponderEvent, Text, View } from 'react-native'
import { ThemeContext } from 'styled-components/native'

import { ButtonChildrenContent, ButtonContent, ButtonLoadingContent, StyledTouchableOpacity } from './button.styles'
import { ButtonProps } from './button.types'

/**
 * A Button allow users to interact by pressing on it.
 *
 * It extends the `TouchableOpacity` component, so anything that works
 * with there works here too.
 */
export const Button: React.FC<ButtonProps> = ({
  type,
  fluid,
  loading,
  color,
  shade,
  size,
  disabled,
  children,
  style,
  textProps,
  onPress,
  borderColor,
  borderWidth,
  borderShade,
  ...props
}): React.FunctionComponentElement<ButtonProps> => {
  const theme: Theme = React.useContext(ThemeContext)
  /**
   * This function return the correct text color name for the button label.
   * Return the color name, based on button type, or button status (for example: disabled)
   */
  const getTextColor = (): ThemeColorsName => {
    if (disabled) {
      return 'gray'
    }
    if (type === 'primary') {
      return 'black'
    }
    if (type === 'secondary') {
      return 'secondary'
    }
    if (type === 'flat') {
      return 'black'
    }
  }

  /**
   * Render the child of the button correctly. if the children is a string,
   * render it in a Text component, otherwise, just render the children
   */
  const renderChild = () => {
    if (typeof children === 'string') {
      const textColor: ThemeColorsName = getTextColor()
      const textStyle = { width: fluid ? '100%' : 'auto' }
      return (
        <Text type="button-label" color={textColor} {...textProps} style={textStyle}>
          {children as string}
        </Text>
      )
    }
    return children
  }

  /**
   * Render the loading indicator to button
   */
  const renderLoading = () => {
    if (loading) {
      const color = getThemeColor(getTextColor())({ theme })
      const activitySize = size === 'large' ? 25 : 20
      return (
        <ButtonLoadingContent testID="loading" accessibilityLabel="carregando..." {...props}>
          <ActivityIndicator color={color} size={activitySize} />
        </ButtonLoadingContent>
      )
    }
    return null
  }

  /**
   * Handle with the onPress event of the button. When the button is loading or
   * disabled, this event cannot be called.
   *
   * @param event - the default value of onPress of touchableOpacity
   */
  const handleOnPress = (event: GestureResponderEvent) => {
    if (!loading && !disabled && onPress) {
      onPress(event)
    }
  }

  return (
    <View style={{ width: fluid ? '100%' : 'auto', flexDirection: "row" }}>
      <StyledTouchableOpacity
        disabled={disabled}
        fluid={fluid}
        {...props}
        onPress={handleOnPress}
        accessibilityRole="button"
      >
        <React.Fragment>
          <ButtonContent
            testID="button"
            type={type}
            color={color}
            shade={shade}
            size={size}
            fluid={fluid}
            disabled={disabled}
            style={style}
            borderWidth={borderWidth}
            borderColor={borderColor}
            borderShade={borderShade}
          >
            <ButtonChildrenContent testID="button-label" loading={loading}>
              {renderChild()}
            </ButtonChildrenContent>
          </ButtonContent>
          {renderLoading()}
        </React.Fragment>
      </StyledTouchableOpacity>
    </View>
  )
}

Button.defaultProps = {
  type: 'primary',
  size: 'small',
  fluid: false,
  textProps: {
    align: 'center',
  },
}
