/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				primary: '#0066FF',
				dark: '#061728',
				light: '#F4F6F8',
				grayDark: '#1E2A3A',
			},
		},
	},
	plugins: [],
};
