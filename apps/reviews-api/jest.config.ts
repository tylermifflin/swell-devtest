/* eslint-disable */
export default {
	displayName: 'reviews-api',
	preset: '../../jest.preset.js',
	globalSetup: '<rootDir>/jest.global-setup.ts',
	globals: {
		'ts-jest': {
			tsconfig: '<rootDir>/tsconfig.spec.json',
		},
	},
	testEnvironment: 'node',
	transform: {
		'^.+\\.[tj]s$': 'ts-jest',
	},
	moduleFileExtensions: ['ts', 'js', 'html'],
	coverageDirectory: '../../coverage/apps/reviews-api',
};
