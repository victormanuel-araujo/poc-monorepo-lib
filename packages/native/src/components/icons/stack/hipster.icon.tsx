import React from 'react'

import Svg, { Path, SvgProps } from 'react-native-svg'

import { ColorProps } from './stack.types'

export const HipsterIcon: React.FC<SvgProps & ColorProps> = ({ color, accentColor, ...props }) => {
  return (
    <Svg testID="hipster-icon" width={110} height={85} viewBox="0 0 110 85" fill="none" {...props}>
      <Path
        d="M54.79 85c23.473 0 42.5-19.028 42.5-42.5S78.263 0 54.79 0c-23.472 0-42.5 19.028-42.5 42.5S31.319 85 54.79 85z"
        fill={accentColor}
      />
      <Path
        d="M96.47 22.94l6.516 8.862-6.165 6.798H89.68L68.515 22.53l-13.733 8.361-13.734-8.36-21.15 16.07h-7.156l-6.165-6.799 6.516-8.862L0 30.573v15.736L13.795 62.47h19.272l21.715-16.48L76.51 62.47h19.258l13.809-16.161V30.573L96.47 22.94z"
        fill={color}
      />
    </Svg>
  )
}
