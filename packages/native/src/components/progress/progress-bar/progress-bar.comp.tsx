import * as React from 'react'

import { View, Text, ViewDirection, ProgressBarProps } from '@components'
import { Animated, StyleProp } from 'react-native'

import { ProgressBarContent, ProgressBarLine, ProgressBarIndicator } from './progress-bar.styles'

/**
 * The Progress Bar component, is a simple indicator, who shows in a line graph
 * the progress in percentage
 *
 * @example
 *
 * ```typescript
 * <ProgressBar percent={20} />
 * ```
 */
const ProgressBar: React.FC<ProgressBarProps> = ({
  background,
  backgroundOpacity,
  backgroundShade,
  value,
  max,
  percentageSide,
  percentageTextProps,
  progressBackground,
  progressBackgroundShade,
  showPercentage,
  ...props
}) => {
  const [animated] = React.useState<Animated.Value>(new Animated.Value(0))

  /**
   * This function ensures that the percentage value do not extrapolate
   * the valid percentage, it is: 0 or 100
   */
  const getPercent = (): number => Math.max(0, Math.min(max, value || 0))

  const getDynamicPercent = (): number => {
    if (!value) {
      return 0
    }

    return (value * 100) / max
  }

  /**
   * This effect is triggered always when the percent value become changed.
   * It starts an animation, who defined the progress bar with in a interpolation
   * value
   */
  React.useEffect(() => {
    const toValue: number = getPercent()
    Animated.spring(animated, { toValue, bounciness: 2, useNativeDriver: false }).start()
  }, [value])

  /**
   * If the prop `showPercent` is correctly set, show a label with the percentage
   */
  const renderPercentLabel = () => {
    if (!showPercentage) {
      return null
    }

    // if the values below are undefined, the padding will respect the `spacing` prop
    const paddingRight: number = percentageSide === 'right' ? 0 : undefined
    const paddingLeft: number = percentageSide === 'left' ? 0 : undefined
    return (
      <View
        width="auto"
        spacing="sm"
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        paddingTop={0}
        paddingBottom={0}
      >
        <Text weight="bold" {...percentageTextProps}>
          {Math.floor(getDynamicPercent()).toString()}%
        </Text>
      </View>
    )
  }

  // define if the percentage label will appear in the right or left of the progress bar
  const direction: ViewDirection = percentageSide === 'right' ? 'row-reverse' : 'row'

  // create a with animation to the progress bar
  const progressBarWidth: StyleProp<any> = {
    width: animated.interpolate({ inputRange: [0, max], outputRange: ['0%', '100%'] }),
  }

  return (
    <View dir="row" {...props}>
      <View dir={direction} alignment="center" justifyContent="center">
        {renderPercentLabel()}
        <ProgressBarContent>
          <ProgressBarLine
            background={background}
            backgroundOpacity={backgroundOpacity}
            backgroundShade={backgroundShade}
          />
          <ProgressBarIndicator
            value={value}
            progressBackground={progressBackground}
            progressBackgroundShade={progressBackgroundShade}
            style={progressBarWidth}
          />
        </ProgressBarContent>
      </View>
    </View>
  )
}

ProgressBar.defaultProps = {
  value: 0,
  max: 100,
  background: 'secondary',
  percentageSide: 'left',
  progressBackground: 'white',
  backgroundOpacity: 0.5,
  showPercentage: true,
}

export { ProgressBar }
