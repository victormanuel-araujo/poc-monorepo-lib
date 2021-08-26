import React, { useEffect, useState } from 'react'

import { InputBase, Icon, Button } from '@components'
import { isEmpty } from 'lodash'
import { Animated } from 'react-native'

import { InputSearchProps } from './input-search.types'

/**
 * A Search input with a clear button
 */
export const InputSearch: React.FC<InputSearchProps> = ({
  value: externalValue,
  color,
  onClear,
  onChangeText,
  clearButtonProps,
  ...props
}) => {
  const [value, setValue] = useState(externalValue)

  useEffect(() => {
    setValue(externalValue)
  }, [externalValue])

  function clearInput() {
    setValue('')
    onChangeText('')

    if (onClear) {
      onClear()
    }
  }

  function handleChangeText(text: string) {
    setValue(text)
    onChangeText(text)
  }

  const disableClearButton = isEmpty(value)

  /* TODO: I guess this could be a custom hook */
  const [opacity] = useState(new Animated.Value(0))
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: value && value.length > 0 ? 1 : 0,
      duration: 125,
      useNativeDriver: false,
    }).start()
  }, [value])

  return (
    <InputBase
      startAdornment={<Icon.Material icon="search" shape="none" size={20} color={color} />}
      endAdornment={
        <Animated.View style={{ opacity }}>
          <Button
            {...clearButtonProps}
            testID="input-search-clean-button"
            type="flat"
            disabled={disableClearButton}
            onPress={clearInput}
          >
            <Icon.Material icon="close" shape="none" size={20} color="secondary" />
          </Button>
        </Animated.View>
      }
      value={value}
      onChangeText={handleChangeText}
      {...props}
    />
  )
}

InputSearch.defaultProps = {
  clearButtonProps: {},
  color: 'secondary',
}
