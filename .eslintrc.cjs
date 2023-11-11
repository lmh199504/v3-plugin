module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-essential',
		'plugin:prettier/recommended',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'vue'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'windows'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'vue/multi-word-component-names': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/ban-types': 'off',
		'prettier/prettier': [
			'error',
			{
				printWidth: 80,
				tabWidth: 2,
				useTabs: true,
				singleQuote: true,
				semi: true,
				trailingComma: 'es5',
				bracketSpacing: true,
				jsxBracketSameLine: false,
				arrowParens: 'avoid',
				endOfLine: 'crlf',
			},
		],
	},
};
