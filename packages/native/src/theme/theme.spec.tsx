import { createTheme, Theme } from '@gama-academy/smash'

const mockTheme: DeepPartial<Theme> = {
  colors: {
    primary: { base: '#ff0000' },
    secondary: { base: '#0000ff' },
  },
  fonts: { default: 'Roboto' },
}

describe('Theme', () => {
  it('should primary color base shade to be red', () => {
    const theme = createTheme(mockTheme)
    expect(theme.colors.primary.base).toBe('#ff0000')
  })

  it('should primary color darker shade to be "undefined", cause it was not defined in mockTheme', () => {
    const theme = createTheme(mockTheme)
    expect(theme.colors.primary.darker).toBeUndefined()
  })

  it('should secondary color base shade to be blue', () => {
    const theme = createTheme(mockTheme)
    expect(theme.colors.secondary.base).toBe('#0000ff')
  })

  it('should default font to be defined as "Roboto"', () => {
    const theme = createTheme(mockTheme)
    expect(theme.fonts.default).toBe('Roboto')
  })

  it('should title font to be defined as "Raleway" as set in theme default value', () => {
    const theme = createTheme(mockTheme)
    expect(theme.fonts.title).toBe('Raleway')
  })

  it('should the unit base to be defined as 8, as set in theme default value', () => {
    const theme = createTheme(mockTheme)
    expect(theme.units.base).toBe(8)
  })
})
