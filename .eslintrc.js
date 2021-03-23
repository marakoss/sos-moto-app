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
        "react-native/no-unused-styles": "warn",
        "react-native/split-platform-components": 2,
        "react-native/no-inline-styles": "off",
        "react-native/no-color-literals": "off",
        "react-native/no-raw-text": 2,
        "react-native/no-single-element-style-arrays": 2,
        "no-use-before-define": "off",
        "react/jsx-filename-extension": "off",
        "react/prop-types": "off",
        "comma-dangle": "off",
        "padded-blocks": "off",
        "arrow-body-style": "off",
        "react-hooks/exhaustive-deps": "warn",
        "import/prefer-default-export": "off",
        "@typescript-eslint/no-use-before-define": ["warn", { "functions": false, "classes": false, "variables": false }],
        "@typescript-eslint/no-unused-vars": "warn",
        "consistent-return": "warn",
        "@typescript-eslint/naming-convention": ["warn", { selector: 'typeLike', format: ['camelCase'] }],
        "no-bitwise": "off",
        "no-console": "off",
        "react/destructuring-assignment": "warn"
      },
      globals: {
        fetch: false
      }
  }