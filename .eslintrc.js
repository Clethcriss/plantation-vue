module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  globals: {
    expect: true,
    sandbox: true,
    cy: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  rules: {
    'no-console': 'error',
    'no-debugger': process.env.ENVIRONMENT === 'production' ? 'error' : 'off',
    'max-len': 'off',
    quotes: ['error', 'single'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error'
  },
  overrides: [
    {
      files: ['**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    },
    {
      files: ['*.spec.ts'],
      rules: {
        'no-unused-expressions': 'off'
      }
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
