const path = require('path')

const nodeExternals = require('webpack-node-externals')

module.exports = [
  {
    name: 'test',
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json', '.jsx'],
      alias: {
        '@components': path.resolve(__dirname, '../src/components/index'),
        '@theme': path.resolve(__dirname, '../src/theme/index'),
        '@utils': path.resolve(__dirname, '../src/utils/index'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },

    entry: './src/index.ts',
    target: 'node',
    externals: [nodeExternals()],

    output: {
      library: { commonjs: 'umd' },
      // libraryExport: 'default',
      // libraryTarget: 'commonjs',
      // filename: '[name].js',
      // path: __dirname + '/lib',
    },
  },
]
