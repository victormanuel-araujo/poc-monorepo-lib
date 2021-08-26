import React from 'react'

import Svg, { Path, SvgProps } from 'react-native-svg'

import { ColorProps } from './stack.types'

export const HyperIcon: React.FC<SvgProps & ColorProps> = ({ color, accentColor, ...props }) => {
  return (
    <Svg testID="hyper-icon" width={94} height={85} viewBox="0 0 94 85" fill="none" {...props}>
      <Path
        d="M46.5 85C69.972 85 89 65.972 89 42.5S69.972 0 46.5 0 4 19.028 4 42.5 23.028 85 46.5 85z"
        fill={accentColor}
      />
      <Path d="M0 26v34h35.055l8.022-14.202c1.595-2.84 6.236-2.84 7.846 0L58.945 60H94V26H0z" fill={color} />
    </Svg>
  )
}
