import { ThemeColorsName, ThemeColorsShade, ThemeFonts, ThemeFontSizes, ThemeFontWeights } from '@theme'
import { TextProperties } from 'react-native'

/**
 * Possible types and pre-definitions of the text
 */
export type TextTypes = 'title' | 'description' | 'tips' | 'error' | 'button-label' | 'input-label'

/**
 * Possible text alignments
 */
export type TextAlignment = 'center' | 'left' | 'right' | 'justify'

/**
 * Possible text decorations to text component
 */
export type TextDecoration = 'line-through' | 'underline'

/**
 * The interface of Text Component Props
 */
export interface TextProps extends TextProperties {
  /**
   * Presets of text styles
   *
   * Default is `description`
   */
  type?: TextTypes
  /**
   * Override the color of the text
   *
   * Default is based on `type`
   */
  color?: ThemeColorsName
  /**
   * Override the shade of the color text
   *
   * Default is based on `type`
   */
  shade?: keyof ThemeColorsShade
  /**
   * Define a custom alignment for the text
   *
   * Default is `left`
   */
  align?: TextAlignment
  /**
   * Override the weight of the font.
   *
   * Default is based on `type`
   */
  weight?: keyof ThemeFontWeights
  /**
   * Override the font size
   *
   * Default is based on `type`
   */
  size?: keyof ThemeFontSizes
  /**
   * Add an text decoration to the component
   *
   * Default is `undefined`
   */
  decoration?: TextDecoration
  /**
   * Override the font family of the text
   *
   * Default is based on `type`
   */
  family?: keyof ThemeFonts
  /**
   * The text that is to be rendered
   */
  children?: string | string[] | JSX.Element[] | JSX.Element
}
