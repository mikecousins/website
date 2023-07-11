module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:jsx-a11y/recommended',
    '@remix-run/eslint-config',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // need this for vite support
  },
};
