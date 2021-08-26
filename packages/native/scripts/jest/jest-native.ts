import '@testing-library/jest-native/extend-expect'

jest.useFakeTimers()

jest.mock('react-native-linear-gradient', () => 'LinearGradient')
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
