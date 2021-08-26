import iconFont from 'react-native-vector-icons/Fonts/MaterialIcons.ttf'

export function injectVectorIconsFontFace() {
  const iconFontStyles = `@font-face {
    src: url(${iconFont});
    font-family: MaterialIcons;
  }`

  const style = document.createElement('style')
  style.type = 'text/css'

  if (style.styleSheet) {
    style.styleSheet.cssText = iconFontStyles
  } else {
    style.appendChild(document.createTextNode(iconFontStyles))
  }

  document.head.appendChild(style)
}
