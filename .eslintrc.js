module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-nested-ternary': 'off',
    'dot-notation': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/require-default-props': 'off',
    // Cannot use `Component.displayName` pattern on class components in TS.
    'react/static-property-placement': 'off',
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.json', '.d.ts'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true,
      },
      rules: {
        'no-unused-vars': 'off',
        'no-param-reassign': ['error', { props: false }],
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
        // Allow `.ts` and `.tsx` extensions to be omitted
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            mjs: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
        'import/no-cycle': 0,
        // Extend this config for TypeScript files
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              'test/**', // tape, common npm pattern
              'tests/**', // also common npm pattern
              'spec/**', // mocha, rspec-like pattern
              '**/jest.config.ts', // jest config
              '**/jest.setup.ts', // jest setup
              '**/__tests__/**', // jest pattern
              '**/__mocks__/**', // jest pattern
              '**/__stories__/**', // storybook files
              'test.{ts,tsx}', // repos with a single test file
              'test-*.{ts,tsx}', // repos with multiple top-level test files
              '**/*{.,_}{test,spec}.{ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
              '**/*{.,_}{stories,story}.{ts,tsx}', // storybook files
              '**/*{.,_}{docs,doc}.{ts,tsx}', // storybook doc files
              '**/utils/storybook.{ts,tsx}', // storybook utils
            ],
            optionalDependencies: false,
          },
        ],
        // No need to use prop types on TS files.
        'react/prop-types': 'off',
        'react/no-array-index-key': 'off',
      },
    },
    {
      files: ['.eslintrc.js', '*.config.js'],
      parserOptions: { sourceType: 'script' },
      env: { node: true },
    },
  ],
}
