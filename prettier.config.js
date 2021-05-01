/**
 * @type {import("prettier").Options}
 */
module.exports = {
	trailingComma: 'es5',
	tabWidth: 2,
	semi: false,
	singleQuote: true,
	overrides: [
		{
			files: 'src/**/*.html',
			options: {
				printWidth: 120,
			},
		},
	],
}
