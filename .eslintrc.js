const hasReact = (() => {
  try {
    require('react/package.json');
    return true;
  } catch (e) {
    return false;
  }
})();

const ifReact = (obj) => (hasReact ? obj : Array.isArray(obj) ? [] : {});

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      ...ifReact({ jsx: true }),
    },
  },
  extends: ['eslint:recommended', 'prettier', ...ifReact(['prettier/react']), 'prettier/@typescript-eslint'],
  plugins: ['prettier', '@typescript-eslint', ...ifReact(['react', 'react-hooks'])],
  settings: {
    ...ifReact({ react: { version: 'detect' } }),
  },
  rules: {
    'no-console': 'error',
    'no-redeclare': 'off',
    'no-unused-vars': 'off',
    'no-dupe-class-members': 'off',
    'no-undef': 'off',
    'prettier/prettier': ['error', require('./.prettierrc.json'), { usePrettierrc: false }],
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    ...ifReact({
      'react/jsx-uses-vars': 1,
      'react/jsx-uses-react': 1,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'off',
    }),
  },
};
