import React from 'react'

import Svg, { Path, SvgProps } from 'react-native-svg'

import { ColorProps } from './stack.types'

export const HackerIcon: React.FC<SvgProps & ColorProps> = ({ color, accentColor, ...props }) => {
  return (
    <Svg testID="hacker-icon" width={85} height={85} viewBox="0 0 85 85" fill="none" {...props}>
      <Path
        d="M42.2722 84.9999H41.7385C18.6899 84.9999 0 66.31 0 43.2614V42.7277C0 19.6792 18.6899 0.989258 41.7385 0.989258H42.2722C65.3208 0.989258 84.0107 19.6792 84.0107 42.7277V43.2614C84.0107 66.31 65.3208 84.9999 42.2722 84.9999Z"
        fill={accentColor}
      />
      <Path
        d="M18.5462 0L18.5319 4.69473H13.8372V49.3232H26.8765L31.5569 34.5663H36.2516L31.5569 49.3662L24.2572 69.605H64.148V58.2547H67.8122V49.2803C67.8122 22.0566 45.7556 0 18.5462 0ZM25.9318 19.7093C24.3287 19.7093 23.0405 18.4211 23.0405 16.818C23.0405 15.2149 24.3287 13.9267 25.9318 13.9267C27.5349 13.9267 28.8231 15.2149 28.8231 16.818C28.8231 18.4211 27.5349 19.7093 25.9318 19.7093Z"
        fill={color}
      />
      <Path d="M71.1619 74.5005H14.5676V80.2544H71.1619V74.5005Z" fill={color} />
    </Svg>
  )
}
