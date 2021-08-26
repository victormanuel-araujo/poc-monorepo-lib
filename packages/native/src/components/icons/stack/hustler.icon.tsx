import React from 'react'

import Svg, { Path, SvgProps } from 'react-native-svg'

import { ColorProps } from './stack.types'

export const HustlerIcon: React.FC<SvgProps & ColorProps> = ({ color, accentColor, ...props }) => {
  return (
    <Svg testID="hustler-icon" width={85} height={85} viewBox="0 0 85 85" fill="none" {...props}>
      <Path
        d="M42.77 85h-.54C18.91 85 0 66.09 0 42.77v-.54C0 18.91 18.91 0 42.23 0h.54C66.09 0 85 18.91 85 42.23v.54C85 66.09 66.09 85 42.77 85z"
        fill={accentColor}
      />
      <Path
        d="M22.33 2.672H11.12v38.521h11.21V2.673zM38.43 18.134H27.22v23.061h11.21v-23.06zM54.514 18.134h-11.21v23.061h11.21v-23.06zM70.611 2h-11.21v39.195h11.21V2zM75.485 45.478H46.102V56.69h29.383V45.48z"
        fill={color}
      />
      <Path
        d="M41.23 61.578V47.016H11v8.412c0 15.53 12.593 28.105 28.105 28.105h3.178c13.405 0 24.616-9.397 27.414-21.955H41.23z"
        fill={color}
      />
    </Svg>
  )
}
