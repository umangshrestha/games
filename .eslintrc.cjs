module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  rules: {
    "jsx-quotes": ["error", "prefer-double"]
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  plugins: ['react'],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
  },
};