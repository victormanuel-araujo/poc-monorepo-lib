const path = require('path')

const pak = require('../package.json')

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json', '.jsx'],
        alias: {
          [pak.name]: path.join(__dirname, '..', pak.source),
          '@theme': path.join(__dirname, '../src/theme/index'),
          '@components': path.join(__dirname, '../src/components/index'),
          '@utils': path.join(__dirname, '../src/utils/index'),
          '@gama-academy/smash': path.join(__dirname, '../src'),
        },
      },
    ],
  ],
}
