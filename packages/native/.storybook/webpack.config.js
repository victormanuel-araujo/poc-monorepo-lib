const path = require('path')

module.exports = async ({ config }) => {
  config.resolve.alias = {
    'react-native$': 'react-native-web',
    '@components': path.resolve(__dirname, '../src/components/index'),
    '@theme': path.resolve(__dirname, '../src/theme/index'),
    '@utils': path.resolve(__dirname, '../src/utils/index'),
    'react-native-linear-gradient': 'react-native-web-linear-gradient',
  }

  /* react-native-svg has .web.js file specific for the web,
     but webpack is not prepared for that, so it resolves to the
     actual native file and not the web one. So we add this specific
     extension at the position so it can be resolved with highest priority. */
  config.resolve.extensions.unshift('.web.js')

  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf|svg)&/,
    use: [{
      loader: 'file-loader',
      query: {
        name: '[name].[ext]'
      }
    }],
    include: [
      path.resolve(__dirname, '../'),
      path.resolve(__dirname, '../../../')
    ]
  });

  config.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    include: /react-native-vector-icons/,
  })

  config.module.rules.push({
    test: /\.ttf$/,
    loader: 'url-loader',
    include: [
      path.resolve(__dirname, '../node_modules/react-native-vector-icons/MaterialIcons.js'),
      path.resolve(__dirname, '../../../node_modules/react-native-vector-icons/MaterialIcons.js'),
    ]
  })

  return config
}
