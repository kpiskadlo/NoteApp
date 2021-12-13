module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    'no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: true },
    ],
    'no-console': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-unused-vars': 'warn',
    'import/prefer-default-export': 'off',
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
  },
};
