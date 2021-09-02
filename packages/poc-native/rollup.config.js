import { babel } from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import dts from 'rollup-plugin-dts'
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import { uglify } from "rollup-plugin-uglify";

const input = './src/index.ts'

const external = ["react", "react-native", "lodash", "styled-components/native"]

const plugins = [
  json(),
  uglify({ compress: { templates: true, strings: true, switches: true } }),
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
