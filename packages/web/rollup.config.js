import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})]

const input = './src/index.ts'

const plugins = [
  commonjs({ sourceMap: true }),
  babel({ babelHelpers: 'bundled' }),
  typescript({ typescript: require('typescript') }),
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

// input,
// output: [
//   {
//     dir: './lib/commonjs',
//     format: 'cjs',
//     exports: 'named',
//     preserveModules: true,
//     sourcemap: true,
//   },
//   {
//     dir: './lib/module',
//     format: 'es',
//     exports: 'named',
//     preserveModules: true,
//     sourcemap: true,
//   },
// ],
// plugins: [
//   commonjs({ sourceMap: true }),
//   babel({ babelHelpers: 'bundled' }),
//   typescript({ tsconfig: './tsconfig.json', sourceMap: true }),
//   relativeToPackage({
//     modulePaths: '../common',
//   })
// ],
