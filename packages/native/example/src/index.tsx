import * as React from 'react'

import { createTheme, DrawerConsumer } from '@gama-academy/smash'
import { StatusBar, useColorScheme } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import App from './app'

export default () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <ThemeProvider theme={createTheme()}>
      <DrawerConsumer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <App />
      </DrawerConsumer>
    </ThemeProvider>
  )
}
