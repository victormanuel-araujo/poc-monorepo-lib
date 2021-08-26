import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default {
  input: './src/index.ts',
  output: [
    {
      dir: './lib/commonjs',
      format: 'cjs',
      exports: 'named',
      preserveModules: true,
      sourcemap: true,
    },
    {
      dir: './lib/module',
      format: 'es',
      exports: 'named',
      preserveModules: true,
      sourcemap: true,
    },
  ],
  plugins: [
    commonjs({ sourceMap: true }),
    babel({ babelHelpers: 'bundled' }),
    typescript({ tsconfig: './tsconfig.json', sourceMap: true }),
  ],
}
