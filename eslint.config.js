import { defineConfig } from 'eslint/config';
import globals from 'globals';
import eslint from '@eslint/js';
import eslintPluginVue from 'eslint-plugin-vue';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
    {
        // 全域設定
        ignores: ['node_modules', 'dist', 'public'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },

    stylistic.configs.customize({
        // 程式碼風格
        indent: 4,
        quotes: 'single',
        semi: true,
        braceStyle: '1tbs',
        arrowParens: 'always',
    }),

    eslint.configs.recommended, // js 推薦配置
    {
        // js 自定義規則
        rules: {
            'no-console': 'error',
            'linebreak-style': ['error', 'windows'],
        },
    },

    ...eslintPluginVue.configs['flat/recommended'], // vue 推薦配置

    {
        // vue 自定義規則
        files: ['**/*.vue'],
        languageOptions: {
            parser: (await import('vue-eslint-parser')).default,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
    },

    eslintPluginPrettierRecommended, // prettier 推薦配置由 prettier 主導
]);
