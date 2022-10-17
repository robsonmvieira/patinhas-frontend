module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/svgTransform.js'
  }

  // The root of your source code, typically /src

  // `<rootDir>` is a token Jest substitutes

  // roots: ['<rootDir>/src'],

  // Jest transformations -- this adds support for TypeScript

  // using ts-jest

  // Runs special logic, such as cleaning up components

  // when using React Testing Library and adds special

  // extended assertions to Jest

  // Test spec file resolution pattern

  // Matches parent folder `__tests__` and filename

  // should contain `test` or `spec`.

  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  // Module file extensions for importing

  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
