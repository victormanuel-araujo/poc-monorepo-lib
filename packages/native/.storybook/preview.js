import { DEFAULT_SETTINGS, withThemesProvider } from 'themeprovider-storybook'
import { createTheme } from '@theme'
import styled, { ThemeProvider } from 'styled-components/native'
import { injectVectorIconsFontFace } from './vector-icons'

// Options:
const themes = [{ name: 'smash - default', ...createTheme() }]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const View = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
`

export const decorators = [
  withThemesProvider(themes, DEFAULT_SETTINGS, ThemeProvider),
  (Story) => (
    <View>
      <Story />
    </View>
  ),
]

injectVectorIconsFontFace()
