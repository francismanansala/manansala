const MAX_CODE_LENGTH = 120

module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsonc/recommended-with-jsonc',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'newline-destructuring',
    'sort-keys-fix',
    'typescript-sort-keys',
    '@typescript-eslint',
  ],
  ignorePatterns: ['generated/*'],
  root: true,
  rules: {
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
    '@typescript-eslint/no-unused-vars': 'error',
    'array-bracket-newline': ['error', { multiline: true }],
    'array-bracket-spacing': ['error'],
    'array-element-newline': ['error', 'consistent'],
    'arrow-spacing': ['error', { after: true, before: true }],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing' : ['error', { after: true }],
    'computed-property-spacing': ['error'],
    'function-paren-newline': ['error', 'consistent'],
    'import/no-named-as-default': 'off',
    indent: ['error', 2, { SwitchCase: 2 }],
    'jsonc/indent': ['error', 2, { SwitchCase: 2 }], 
    'jsonc/object-curly-newline': ['error', { consistent: true, multiline: true }],
    'jsonc/object-curly-spacing': ['error', 'always'],
    'jsonc/object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
    'max-len': [
      'error', {
        code: MAX_CODE_LENGTH,
        ignoreComments: true,
        ignorePattern: '^import .*',
        ignoreStrings: true,  
      },
    ],
    'newline-destructuring/newline': [
      'error', {
        consistent: true,
        items: 4,
        itemsWithRest: 4,
        maxLength: MAX_CODE_LENGTH, 
      },
    ],
    'object-curly-newline': ['error', { consistent: true, multiline: true }],
    'object-curly-spacing': ['error', 'always'], 
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'quote-props': ['error', 'as-needed'],
    quotes: [2, 'single', { avoidEscape: true }],
    'react-hooks/exhaustive-deps': 'error',
    semi: ['error', 'never'],
    'space-before-function-paren': [
      'error', {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never',
      },
    ],
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
  },

  // eslint-disable-next-line sort-keys-fix/sort-keys-fix
  overrides: [
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',
    },
  ],
}