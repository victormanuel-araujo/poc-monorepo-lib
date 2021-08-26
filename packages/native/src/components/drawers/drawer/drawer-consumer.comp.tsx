import * as React from 'react'

import { View, Text, ViewProps, Button, Icon, DrawerSettings } from '@components'
import { Animated, ScrollView, StyleProp, TouchableWithoutFeedback, useWindowDimensions } from 'react-native'

import { DrawerBodyOverlay, DrawerCloseButtonWrapper, DrawerContent, DrawerInner, DrawerOverlay } from './drawer.styles'
import { DrawerActions } from './drawer.types'

/* ---- */

export const DrawerContext = React.createContext<DrawerActions>(null)

const DrawerConsumer: React.FC = ({ children }) => {
  // defaults
  const { height } = useWindowDimensions()
  const defaultSettings: DrawerSettings = {
    bodyMaxHeight: height / 2,
    overlayOpacity: 0.01,
    backgroundColor: 'black',
    backgroundColorShade: 'light',
    closeByOverlay: true,
  }

  // states
  const [settings, setSettings] = React.useState<DrawerSettings>(defaultSettings)
  const [visible, setVisible] = React.useState<boolean>(false)
  const [drawerContent, setDrawerContent] = React.useState<ViewProps['children']>()

  const [animation] = React.useState<Animated.Value>(new Animated.Value(0))

  /**
   * Animate the drawer to show or hide the content
   * @param toValue
   * @param callback
   */
  const startAnimation = (toValue: number, callback?: () => void) => {
    Animated.spring(animation, { toValue, bounciness: 4, useNativeDriver: false }).start(callback)
  }

  /**
   * This function shows the drawer content
   */
  const show = () => {
    setVisible(true)
    startAnimation(1)
  }

  /**
   * this function hides the drawer content, waiting 300ms to hide the element,
   * only after the animation ends
   */
  const close = () => {
    startAnimation(0, () => {
      setVisible(false)
      onClose()
    })
  }

  /**
   * this function calls the trigger defined in the implementation of component.
   * Exec an action always when the Drawer is closed
   */
  const onClose = () => {
    if (settings.onClose) {
      settings.onClose()
    }
  }

  /**
   * The setContent controls what will be rendered inside the drawer. and will
   * update the drawer settings, to always be correct when the drawer is open
   */
  const setContent = (content: ViewProps['children'], _settings: DrawerSettings) => {
    setDrawerContent(content)
    setSettings(_settings)
  }

  const contextValue: DrawerActions = {
    show,
    close,
    setContent,
  }

  const drawerContentStyle: StyleProp<any> = { transform: [{ translateY: visible ? 0 : height }] }
  const drawerOverlayStyle: StyleProp<any> = {
    opacity: animation.interpolate({ inputRange: [0, 1], outputRange: [0, settings.overlayOpacity] }),
  }
  const drawerInnerStyle: StyleProp<any> = {
    top: animation.interpolate({ inputRange: [0, 1], outputRange: ['100%', '0%'] }),
  }

  return (
    <DrawerContext.Provider value={contextValue}>
      {children}

      <DrawerContent style={drawerContentStyle}>
        <TouchableWithoutFeedback onPress={close} disabled={!settings.closeByOverlay}>
          <DrawerOverlay style={drawerOverlayStyle} />
        </TouchableWithoutFeedback>
        <DrawerInner
          style={drawerInnerStyle}
          backgroundColor={settings.backgroundColor}
          backgroundColorShade={settings.backgroundColorShade}
        >
          <DrawerBodyOverlay
            backgroundColor={settings.backgroundColor}
            backgroundColorShade={settings.backgroundColorShade}
          />
          <View spacing="lg">
            {/* drawer header */}
            <View
              alignment="center"
              justifyContent="center"
              style={{ height: 30 }}
              spacing="lg"
              paddingTop={0}
              paddingBottom={0}
            >
              <Text color="white" weight="bold" align="center">
                {settings.title}
              </Text>
              <DrawerCloseButtonWrapper>
                <Button
                  type="flat"
                  onPress={() => {
                    close()
                  }}
                >
                  <Icon.Material icon="close" shape="none" color="white" />
                </Button>
              </DrawerCloseButtonWrapper>
            </View>
            {/* drawer body */}
            <View spacing="lg" paddingRight={0} paddingBottom={0} paddingLeft={0} {...settings.bodyProps}>
              <ScrollView style={{ maxHeight: settings.bodyMaxHeight }}>{drawerContent}</ScrollView>
            </View>
          </View>
        </DrawerInner>
      </DrawerContent>
    </DrawerContext.Provider>
  )
}

export { DrawerConsumer }
