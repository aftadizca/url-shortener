// const config = {
// 	content: ['./src/**/*.{html,js,svelte,ts}'],

// 	theme: {
// 		extend: {}
// 	},

// 	plugins: []
// };

// module.exports = config;

const config = {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	],

	theme: {
		fontFamily: {
			'sans': ['Dosis']
		},
		extend: {
			colors: {
				'bg': '#30292F',
				'secondary': '#5f5aa2',
			}
		},
	},

	plugins: [
		require('flowbite/plugin')
	],
	darkMode: 'class',
};

module.exports = config;