const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

const customJestConfig = {
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    snapshotResolver: './__snapshots__/snapshotResolver.js',

    testMatch: [
        '**/__tests__/**/?(*.)+(spec|test).(js|ts|tsx)',
        '**/?(*.)+(spec|test).(js|ts|tsx)'
    ],
    moduleNameMapper: {
        "@/(.*)": "<rootDir>/src/$1",
    },
}

module.exports = createJestConfig(customJestConfig)
