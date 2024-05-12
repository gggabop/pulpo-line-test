/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				regular: ['Regular'],
				medium: ['Medium'],
				bold: ['Bold'],
				colors: {
					orange: {
						600: '#F85900',
					},
				},
				//   extraBold: ['ExtraBold'],
				//   thin: ['thin'],
				//   light: ['Light'],
				//   extraLight: ['ExtraLight'],
			},
		},
	},
	plugins: [],
};
