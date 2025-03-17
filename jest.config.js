module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.ts$'
};
