import React, { useContext } from 'react'

import { getThemeColor } from '@theme'
import Svg, { Path } from 'react-native-svg'
import { ThemeContext } from 'styled-components/native'

import { PlaylistIconProps } from './playlist.types'

/**
 * Gama Station Playlist icon
 *
 * It has different colors for different parts.
 */
export function Playlist(props: PlaylistIconProps) {
  const theme = useContext(ThemeContext)

  const background = getThemeColor(props.background)({ theme })
  const upArrow = getThemeColor(props.upArrow)({ theme })
  const downArrow = getThemeColor(props.downArrow)({ theme })

  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 54 54" fill="none" {...props}>
      /* Background */
      <Path d="M27 54c14.912 0 27-12.088 27-27S41.912 0 27 0 0 12.088 0 27s12.088 27 27 27z" fill={background} />
      /* Down Arrow */
      <Path
        d="M28.828 36.892a9.884 9.884 0 01-1.828.177c-5.407 0-9.816-4.402-9.816-9.816 0-1.277.247-2.53.734-3.706l.285-.696-6.913-6.913-.753 1.221a19.223 19.223 0 00-2.859 10.1c0 10.651 8.665 19.316 19.316 19.316.607 0 1.22-.032 1.828-.089v5.838L39.327 41.82 28.822 31.314v5.578h.006z"
        fill={downArrow}
      />
      /* Up Arrow */
      <Path
        d="M26.994 7.938c-.797 0-1.594.05-2.385.151v-5.9L14.104 12.693l10.505 10.505v-5.452a9.77 9.77 0 012.385-.297c5.407 0 9.816 4.402 9.816 9.81a9.66 9.66 0 01-.734 3.706l-.285.695 6.913 6.913.753-1.22a19.224 19.224 0 002.858-10.1c0-10.652-8.67-19.316-19.321-19.316z"
        fill={upArrow}
      />
    </Svg>
  )
}

Playlist.defaultProps = {
  background: 'black',
  upArrow: 'white',
  downArrow: 'white',
  size: 24,
}
