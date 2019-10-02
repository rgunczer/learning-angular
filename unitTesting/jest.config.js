// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config
module.exports = {
  preset: 'jest-preset-angular',
  roots: ['/src'],
  setupFilesAfterEnv: ['src/setup-jest.ts'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/app/$1',
    '@assets/(.*)': '<rootDir>/assets/$1',
    '@core/(.*)': '<rootDir>/app/core/$1',
    '@env': '<rootDir>/environments/environment',
    '@src/(.*)': '<rootDir>/$1',
    '@state/(.*)': '<rootDir>/app/state/$1'
  },
  transformIgnorePatterns: ['node_modules/(?!(jest-test))']
};
