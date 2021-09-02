export default {
  multiply(a: number, b: number) {
    return Promise.resolve(a * b);
  },
};

export * from './test'
export * from './button'
export { createTheme } from '../../common/theme'