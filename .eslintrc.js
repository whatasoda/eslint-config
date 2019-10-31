const prettierrc = require('./.prettierrc.json');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // remove this line after typescript-eslint fixed
    createDefaultProgram: true,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
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
    'no-undef': 'off',
    'prettier/prettier': ['error', prettierrc, { "usePrettierrc": false }],
    'react/jsx-uses-vars': 1,
    'react/jsx-uses-react': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
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
