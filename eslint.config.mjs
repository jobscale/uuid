import globals from "globals";
import pluginJs from "@eslint/js";
import airbnb from 'eslint-config-airbnb-base/rules/best-practices';

const { configs: { recommended } } = pluginJs;

export default [{
  files: ['**/*.js'],
  languageOptions: { ecmaVersion: 2024, sourceType: 'commonjs' },
}, {
  files: ['**/*.mjs'],
  languageOptions: { ecmaVersion: 2024, sourceType: 'module' },
}, {
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.jest,
    },
  },
  rules: {
    ...airbnb.rules,
    indent: ['error', 2, { MemberExpression: 0 }],
    'class-methods-use-this': 'off',
  },
}, recommended];
