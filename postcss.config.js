module.exports = {
	plugins: [
		[
			"postcss-preset-env",
			{
				state: 3,
				features: {
					"nesting-rules": true,
				},
			},
		],
		"tailwindcss",
		"autoprefixer",
	],
};
