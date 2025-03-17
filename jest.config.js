/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  testEnvironment: "node",
  clearMocks: true,
  rootDir: "./",
  coverageDirectory: "<rootDir>/coverage",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/**/constant.ts",
    "!<rootDir>/src/**/index.ts",
    "!<rootDir>/src/**/types.ts"
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules"],
  coverageReporters: ["json", "html"],
  testMatch: [
    "<rootDir>/__tests__/**/*.test.ts",
    "<rootDir>/?(*.)+(spec|test).ts"
  ],
}
