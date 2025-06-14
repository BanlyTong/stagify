const { defineConfig, globalIgnores } = require('eslint/config');

const tsParser = require('@typescript-eslint/parser');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    extends: compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'prettier',
    ),

    languageOptions: {
      parser: tsParser,

      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
    },

    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
        "@typescript-eslint/no-explicit-any": "warn"
    }
  },
  globalIgnores(['**/node_modules', '**/build', '**/coverage', '**/.eslintrc.cjs', '**/.babel.config.js']),
]);
