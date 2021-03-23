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
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "react-native/no-inline-styles": 2,
        "react-native/no-color-literals": 2,
        "react-native/no-raw-text": 2,
        "react-native/no-single-element-style-arrays": 2,
        "no-use-before-define": "off",
        "react/jsx-filename-extension": "off",
        "react/prop-types": "off",
        "comma-dangle": "off",
        "padded-blocks": "off",
        "arrow-body-style": "off",
        "react-hooks/exhaustive-deps": "warn"
      },
      globals: {
        fetch: false
      }
  }