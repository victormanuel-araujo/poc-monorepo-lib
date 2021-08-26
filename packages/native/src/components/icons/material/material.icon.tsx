import React, { useContext } from 'react'

import { getThemeColor } from '@theme'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ThemeContext } from 'styled-components/native'

import { IconContainer } from './material.styles'
import { MaterialIconProps } from './material.types'

/**
 * Material Design Icon.
 *
 * Use aliases for color and sizes of the Gama Smash theme,
 * like `primary`, `secondary`, `black`, etc for colors and
 * `sm` and `md` for size.
 *
 * It extends the View interface, so you could pass another
 * props compatible with React Native's View component.
 */
export const MaterialIcon: React.FC<MaterialIconProps> = ({
  icon,
  color,
  shade,
  size,
  padding,
  shape,
  border,
  background,
  width,
  height,
  style,
  ...props
}) => {
  const theme = useContext(ThemeContext)

  return (
    <IconContainer
      size={size}
      shape={shape}
      background={background}
      border={border}
      width={width}
      height={height}
      $padding={padding}
    >
      <Icon name={icon} size={size} color={getThemeColor(color, shade)({ theme })} {...props} />
    </IconContainer>
  )
}

MaterialIcon.defaultProps = {
  shape: 'round',
  size: 24,
  padding: 'sm',
  color: 'black',
}
