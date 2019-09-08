const prettierrc = require('./.prettierrc.json');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: ['prettier', '@typescript-eslint', 'react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    }
  },
  rules: {
    'no-console': 'error',
    'no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
    }],
    'no-dupe-class-members': 'off',
    'prettier/prettier': ['error', prettierrc, { "usePrettierrc": false }],
    'react/jsx-uses-vars': 1,
    'react/jsx-uses-react': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
    }],
  },
  globals: {
    process: true,
    module: true,
    app: true,
  },
  env: {
    jest: true,
    es6: true,
    browser: true,
    node: true,
  },
}
