import React from 'react'

import Svg, { Path, SvgProps } from 'react-native-svg'

import { ColorProps } from './stack.types'

export const HumanIcon: React.FC<SvgProps & ColorProps> = ({ color, accentColor, ...props }) => {
  return (
    <Svg testID="human-icon" width={85} height={85} viewBox="0 0 85 85" fill="none" {...props}>
      <Path
        d="M42.77 85h-.54C18.91 85 0 66.09 0 42.77v-.54C0 18.91 18.91 0 42.23 0h.54C66.09 0 85 18.91 85 42.23v.54C85 66.09 66.09 85 42.77 85z"
        fill={accentColor}
      />
      <Path d="M43 23.951L58.995 14 75 23.737v27.586L43 71 11 51.323V23.737L27.005 14 43 23.951z" fill={color} />
    </Svg>
  )
}
