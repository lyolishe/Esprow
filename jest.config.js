module.exports = {
  modulePaths: ['/shared/vendor/modules'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'bower_components', 'shared'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tools/jest/fileMock.js',
    '\\.(css|less)$': '<rootDir>/tools/jest/styleMock.js',
    '^@pages(.*)$': '<rootDir>/src/Pages$1',
    '^@app(.*)$': '<rootDir>/src/App$1',
    '^@shared(.*)$': '<rootDir>/src/Shared$1',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
