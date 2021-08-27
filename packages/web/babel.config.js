const path = require('path')

module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json', '.jsx'],
        alias: {
          '@theme': '../common/theme',
          '@components': './src/components',
          '@utils': './src/utils',
        },
      },
    ],
  ],
}
