module.exports = {
  modulePathIgnorePatterns: ['<rootDir>/lib/', '<rootDir>/web/'],
  preset: 'react-native',
  setupFilesAfterEnv: ['./scripts/jest/jest-native.ts'],
  moduleNameMapper: {
    '@theme': '<rootDir>/src/theme/index',
    '@components': '<rootDir>/src/components/index',
    '@utils': '<rootDir>/src/utils/index',
    '@gama-academy/smash': '<rootDir>/src/index',
  },
  transformIgnorePatterns: ['node_modules/(?!(@react-native|react-native|react-native-vector-icons)/)'],
}
