import React from 'react'

import { Icon, Text, MaterialIconType } from '@components'

import { RatingButton, RatingContainer } from './rating.styles'
import { RatingProps } from './rating.types'

/**
 * Rating is a simple component commonly used to rate something,
 * usually based on a number of stars.
 */
export const Rating: React.FC<RatingProps> = ({
  maxRatingValue,
  value,
  disabled,
  onChange,
  showTotalOfEvaluators,
  totalOfEvaluators,
  ...props
}) => {
  const [internalValue, setInternalValue] = React.useState<number>(value || 0)

  const { fullColorUntil, lastIconIsHalf } = React.useMemo(() => {
    const fullColorUntil = Math.floor(internalValue) || 0
    const lastIconIsHalf = internalValue - fullColorUntil >= 0.5
    return {
      fullColorUntil,
      lastIconIsHalf,
    }
  }, [internalValue])

  function renderIcon(iconIndex) {
    const lastFullColorIconIndex = fullColorUntil - 1
    const lastIconIndex = lastIconIsHalf ? lastFullColorIconIndex + 1 : lastFullColorIconIndex

    const { iconSize, emptyIconName, halfIconName, fullIconName, backgroundColor, iconColor } = props

    const renderIconByName = (name: MaterialIconType) => (
      <Icon.Material
        testID={`rating-icon-${iconIndex}`}
        icon={name}
        size={iconSize}
        background={backgroundColor}
        color={iconColor}
      />
    )

    let iconName = emptyIconName

    if (iconIndex <= lastFullColorIconIndex) {
      iconName = fullIconName
    } else if (iconIndex === lastIconIndex && lastIconIsHalf) {
      iconName = halfIconName
    }

    return renderIconByName(iconName)
  }

  function handleChange(newValue: number) {
    setInternalValue(newValue)

    if (onChange) {
      onChange(newValue)
    }
  }

  React.useEffect(() => {
    setInternalValue(value)
  }, [value])

  if (maxRatingValue <= 0) {
    return null
  }

  return (
    <RatingContainer testID="rating-container">
      {[...Array(maxRatingValue).keys()].map((_, index) => {
        const positon = index + 1
        return (
          <RatingButton
            testID={`rating-button-${index}`}
            disabled={disabled}
            key={`ratting-button-${index}`}
            onPress={() => handleChange(positon)}
          >
            {renderIcon(index)}
          </RatingButton>
        )
      })}
      {showTotalOfEvaluators && <Text testID="ratting-number-of-evaluators">({`${totalOfEvaluators || 0}`})</Text>}
    </RatingContainer>
  )
}

Rating.defaultProps = {
  maxRatingValue: 5,
  value: 0,
  disabled: false,
  onChange: null,
  iconSize: 20,
  emptyIconName: 'star-border',
  halfIconName: 'star-half',
  fullIconName: 'star',
  iconColor: 'yellow',
  backgroundColor: 'transparent',
  showTotalOfEvaluators: false,
  totalOfEvaluators: 0,
}
