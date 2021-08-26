import * as React from 'react'

import { StepIndicatorProps, View } from '@components'
import { Theme } from '@theme'
import { ThemeContext } from 'styled-components/native'

import { StepIndicatorDot, StepIndicatorTouchable } from './step-indicator.styles'

/**
 * The `StepIndicator` is a navigation component who guide the user when their are
 * on a sequential page, or sequencial form.
 *
 * It shows to the user the current stage he is in, and how many are missing,
 * and how many he has gone through
 */
export const StepIndicator: React.FC<StepIndicatorProps> = ({
  active,
  color,
  inactiveOpacity,
  spacing,
  size,
  length,
  startFrom,
  retroactive,
  lockForward,
  onChange,
  onPress,
  ...props
}) => {
  const [current, setCurrent] = React.useState<number>(startFrom)
  const theme: Theme = React.useContext(ThemeContext)

  /**
   * This effect is triggered always when the `active` prop undergo a change.
   * It happens for the sibling/parents components can control it
   */
  React.useEffect(() => {
    // only save the change, if the `active` prop was defined
    // zero is a valid value to the `active`
    if (active || active === 0) {
      const fixedActive = active >= 0 && active <= length - 1 ? active : 0
      handleChange(fixedActive)
    }
  }, [active])

  /**
   * This function handle with the onPress event, when the user press some dot step.
   *
   * Important: the `handleChange` function cant be called if the used press a dot
   * who is already active.
   *
   * @param index
   */
  const handlePress = (index: number) => {
    if (index !== current) {
      // if the lockForward prop is set as true, and the dot pressed is
      // forward of the current dot, the function will not be called
      if (lockForward && index > current) {
        return false
      }

      handleChange(index)
      if (onPress) {
        onPress(index)
      }
    }
  } // handlePress

  /**
   * This function handle with the `onChange` event.
   *
   * It must to save the current active dot in the local state, and pass this
   * value to the `onChange` function defined in component props.
   *
   * @param index
   */
  const handleChange = (index: number) => {
    setCurrent(index)
    if (onChange) {
      onChange(index)
    }
  } // handleChange

  /**
   * This function control and render the correct quantity of Dots to represent
   * the steps
   */
  const renderDots = () => {
    // create an empty array with the dots length, to map and show the dots
    const dots = new Array(length).fill(null)
    // return the spacing value
    const spacingValue = theme.paddings[spacing]
    // calc the new padding of the Dot View wrapper
    const padding = spacingValue / 2

    return dots.map((arr, key) => {
      // define if this dot already gone through
      const isRetroactive = key <= current
      // define the inactive opacity, validating the retroactivity and the dot key
      const _inactiveOpacity = retroactive && isRetroactive ? 1 : inactiveOpacity

      // define the opacity value when the user press the dot
      const activeOpacity = current === key ? 1 : key > current && lockForward ? 1 : 0.5

      return (
        <StepIndicatorTouchable
          hitSlop={{ top: 10, bottom: 10 }}
          key={key}
          onPress={() => handlePress(key)}
          activeOpacity={activeOpacity}
          testID="step-dot"
        >
          <View width="auto" paddingLeft={key === 0 ? 0 : padding} paddingRight={key === length - 1 ? 0 : padding}>
            <StepIndicatorDot size={size} isActive={current === key} color={color} inactiveOpacity={_inactiveOpacity} />
          </View>
        </StepIndicatorTouchable>
      )
    })
  }

  return (
    <View dir="row" width="auto" {...props}>
      {renderDots()}
    </View>
  )
}

StepIndicator.defaultProps = {
  size: 8,
  startFrom: 0,
  spacing: 'sm',
  inactiveOpacity: 0.24,
  color: 'secondary',
  retroactive: false,
}
