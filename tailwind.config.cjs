/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",

				"primary": {
					DEFAULT: "#fc7200",
					1: "#ff8017",
					2: "#ff8e30",
					3: "#ff9c4a",
					4: "#ffaa63"
				},
				"secondary": {
					DEFAULT: "#ff6978",
					1: "#ff838f",
					2: "#ff9ca6",
					3: "#ffb6bd",
					4: "#ffcfd4"
				},
				"foreground": {
					DEFAULT: "#2d000f",
					1: "#470018",
					2: "#600020",
					3: "#7a0029",
					4: "#940031"
				},
				"background": {
					DEFAULT: "#f08769",
					1: "#f39981",
					2: "#f5ac98",
					3: "#f7bfaf",
					4: "#fad1c6"
				},
				"info": "#5affff",
				"success": "#c3ff5a",
				"danger": "#e18778",
				"warning": "#ffd25a"
			}
		}
	},
	plugins: [],
}
