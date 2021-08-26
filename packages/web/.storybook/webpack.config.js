const path = require('path')

module.exports = async ({ config }) => {
  config.resolve.alias = {
    '@components': path.resolve(__dirname, '../src/components/index'),
    '@theme': path.resolve(__dirname, '../src/theme/index'),
    '@utils': path.resolve(__dirname, '../src/utils/index'),
  }

  config.resolve.extensions.unshift('.web.js')

  return config
}
