const isDev = process.env.NODE_ENV !== "production";

module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: [
		"plugin:vue/vue3-recommended",
		"eslint:recommended",
		"@vue/typescript/recommended",
		"@vue/prettier",
		"@vue/prettier/@typescript-eslint",
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		indent: ["warn", "tab"],
		"no-tabs": [
			"error",
			{
				allowIndentationTabs: true,
			},
		],
		"max-len": [
			"error",
			{
				code: 120,
				tabWidth: 4,
				ignoreComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
				ignorePattern: "^\\s*(<\\S+ |/?>).*$",
			},
		],
		quotes: [
			"error",
			"double",
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		"no-console": isDev ? "off" : "error",

		"no-debugger": isDev ? "off" : "error",
	},
	overrides: [
		{
			files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
			env: {
				jest: true,
			},
		},
	],
};
