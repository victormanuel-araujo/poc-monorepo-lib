import React from 'react'

import { LoadingWrapper } from './loading.styles'
import { LoadingProps } from './loading.types'

const Loading: React.FC<LoadingProps> = (props) => {
  return <LoadingWrapper size={props.size} color={props.color} />
}

Loading.defaultProps = {
  size: 36,
  color: 'primary',
}

export default Loading
