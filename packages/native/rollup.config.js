import { babel } from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import dts from 'rollup-plugin-dts'
import typescript from 'rollup-plugin-typescript2'

// const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})]
const external = [
  'react-native-vector-icons',
  'react-native-vector-icons/MaterialIcons',
  'react',
  'react-native',
  'lodash',
  'styled-components/native',
  'react-native-linear-gradient',
  'react-native-svg',
]
const input = './src/index.tsx'

const plugins = [
  json(),
  resolve({ extensions: ['.js', '.ts', '.tsx'] }),
  babel({ exclude: [/node_modules/], babelHelpers: 'bundled' }),
  typescript({ typescript: require('typescript'), jsx: 'react', exclude: [/node_modules/] }),
]

export default [
  {
    input,
    output: { dir: './lib/module', format: 'esm', exports: 'named', sourcemap: true },
    plugins,
    external,
  },
  {
    input,
    output: { dir: './lib/commonjs', format: 'cjs', exports: 'named', sourcemap: true },
    plugins,
    external,
  },
  {
    input,
    output: [{ file: './lib/typescript/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
]
