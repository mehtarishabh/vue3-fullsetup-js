module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': ['error'],
    'vue/no-unused-refs': ['error'],
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': ['error'],
    'vue/no-export-in-script-setup': ['error']
  },
}
