/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'cardcolor': '#16689f33',
				'powercyan': '#22d3ee',
				'softcyan': '#33abc0',
				'bluegray': '#273747',
				'almostblack': '#020617',
				'darkblue': '#020f13'
			},
			screens: {
				'xs': '380px',
      			...defaultTheme.screens,
			},
			height: {
				'128': '32rem',
				'section': 'calc(100vh - 7rem)'
			},
		},
	},
	plugins: [],
}
