/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				primary: '#0066FF',
				dark: '#061728',
				light: '#F4F6F8',
				'dark-gray': '#1E2A3A',
				'dark-blue': '#06182F',
				blue: '#0066FF',
				white: '#FFFFFF',
			},
		},
	},
	plugins: [],
};
