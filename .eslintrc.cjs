module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        // 'standard-with-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:react/jsx-runtime',
    ],
    overrides: [],
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    settings: {
        react: {
            version: '18.2.0',
        },
    },
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-alert': 'warn',
        'no-console': 'warn',
        'prettier/prettier': 'warn',
        'no-unused-vars': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'warn',
    },
};
