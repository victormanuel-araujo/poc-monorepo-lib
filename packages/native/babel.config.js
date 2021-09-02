module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
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
