module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"@react-native-community",
		"airbnb-typescript",
		"prettier"
	],
	plugins: [
		"@typescript-eslint",
		"react",
		"react-native",
		"react-hooks"
	],
	parserOptions: {
		project: "./tsconfig.json",
		ecmaVersion: 2018,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		jest: true,
		"react-native/react-native": true
	},
	rules: {
		"import/extensions": "always",
		"import/no-extraneous-dependencies": ["warn", { "devDependencies": false, "optionalDependencies": false, "peerDependencies": false }],
		"import/prefer-default-export": "off",
		"react/jsx-filename-extension": "off",
		"react/prop-types": "off",
		"react/destructuring-assignment": "warn",
		"react-hooks/exhaustive-deps": "warn",
		"react-native/no-unused-styles": "warn",
		"react-native/split-platform-components": 2,
		"react-native/no-inline-styles": "off",
		"react-native/no-color-literals": "off",
		"react-native/no-raw-text": 2,
		"react-native/no-single-element-style-arrays": 2,
		"@typescript-eslint/no-use-before-define": ["warn", { "functions": false, "classes": false, "variables": false }],
		"@typescript-eslint/no-unused-vars": "warn",
		"@typescript-eslint/naming-convention": ["warn", { selector: 'typeLike', format: ['camelCase'] }],
		"arrow-body-style": "off",
		"consistent-return": "warn",
		"comma-dangle": "off",
		"object-shorthand": "off",
		"padded-blocks": "off",
		"no-bitwise": "off",
		"no-console": "off",
		"no-use-before-define": "off"
	},
	globals: {
		fetch: false
	}
}
