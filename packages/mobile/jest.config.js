module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|react-native-vector-icons|react-native-gesture-handler|react-native-iphone-x-helper)/)',
  ],
  setupFiles: ['<rootDir>/jest/setup.js'],
  timers: 'fake',
  testEnvironment: 'jsdom',
};
