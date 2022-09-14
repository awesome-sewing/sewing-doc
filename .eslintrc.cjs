module.exports = {
  extends: ['alloy', 'alloy/vue', 'alloy/typescript'],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    browser: true,
    node: true,
    // mocha: true,
    jest: true,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  rules: {
    // 自定义你的规则
    'vue/no-multiple-template-root': 'off',
    'vue/no-duplicate-attributes': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
  },
  plugins: ['simple-import-sort'],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
