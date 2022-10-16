/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				wht: 'hsl(0, 0%, 100%)',
				blk: 'hsl(0, 0%, 0%)',
				'dark-gray': 'hsl(0, 0%, 55%)',
				'darker-gray': 'hsl(0, 0%, 41%)',
			},
		},
		container: {
			center: true,
			padding: '1.5rem',
			screens: {
				lg: '1170px',
				xl: '1170px',
				'2xl': '1170px',
			},
		},
		fontFamily: {
			alata: ['Alata, sans-serif'],
			josefinSans: ['Josefin Sans, sans-serif'],
		},
	},
	plugins: [],
};
