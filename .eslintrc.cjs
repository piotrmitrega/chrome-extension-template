module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  ignorePatterns: [
    'node_modules/',
    'build/',
    'scripts/',
    'config/',
    'src/serviceWorker.ts',
    'src/react-app-env.d.ts',
    "watch.js",
    "dist/**"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ['import', 'react', 'prettier'],
  globals: {
    __DEV__: true,
    chrome: "readonly"
  },
  rules: {
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    'comma-dangle': [2, 'always-multiline'],
    'import/extensions': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-cycle': 2,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    'new-cap': 0,
    'no-console': 0,
    'prefer-const': 2,
    'prefer-template': 2,
    "prettier/prettier": [
      "error",
      {
        printWidth: 100,
      },
    ],
    'react/display-name': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-no-target-blank': 0,
    'react/jsx-sort-props': [2, { callbacksLast: true, shorthandLast: true }],
    'react/prop-types': [1, { skipUndeclared: true }],
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    'react/sort-prop-types': [2, { callbacksLast: true, requiredFirst: true }],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      ts: {
        alwaysTryTypes: true,
      },
    },
  },
};
