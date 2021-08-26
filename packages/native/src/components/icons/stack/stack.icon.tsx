import React, { useContext } from 'react'

import { getThemeColor } from '@theme'
import { ThemeContext } from 'styled-components/native'

import { HackerIcon } from './hacker.icon'
import { HipsterIcon } from './hipster.icon'
import { HumanIcon } from './human.icon'
import { HustlerIcon } from './hustler.icon'
import { HyperIcon } from './hyper.icon'
import { StackIconProps } from './stack.types'

/**
 * Icons for the Gama Stack
 *
 * At Gama Academy each stack is one of the knowledge fields
 * we are responsible for teaching and training.
 *
 * They are: hacker, hipster, human, hustler and hyper.
 *
 */
export const StackIcon: React.FC<StackIconProps> = ({ stack, size, color, accentColor, ...props }) => {
  const theme = useContext(ThemeContext)

  const colorValue = getThemeColor(color)({ theme })
  const accentColorValue = getThemeColor(accentColor)({ theme })

  switch (stack) {
    case 'hacker':
      return <HackerIcon width={size} height={size} color={colorValue} accentColor={accentColorValue} {...props} />
    case 'hipster':
      return <HipsterIcon width={size} height={size} color={colorValue} accentColor={accentColorValue} {...props} />
    case 'human':
      return <HumanIcon width={size} height={size} color={colorValue} accentColor={accentColorValue} {...props} />
    case 'hustler':
      return <HustlerIcon width={size} height={size} color={colorValue} accentColor={accentColorValue} {...props} />
    case 'hyper':
      return <HyperIcon width={size} height={size} color={colorValue} accentColor={accentColorValue} {...props} />
    default:
      throw new Error('Unexpected Gama Stack: ' + stack)
  }
}

StackIcon.defaultProps = {
  size: 50,
  color: 'black',
  accentColor: 'primary',
}
