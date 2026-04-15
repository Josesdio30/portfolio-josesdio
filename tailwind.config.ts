import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
				mono: ["var(--font-mono)", ...fontFamily.mono],
			},
			colors: {
				primary: "#020617", // Rich Dark Blue/Black
				secondary: "#94a3b8", // Muted Slate
				tertiary: "#1e293b", // Slate 800
				accent: {
					DEFAULT: "#10b981", // Emerald 500
					light: "#34d399",
					dark: "#059669",
				},
				gold: {
					DEFAULT: "#fbbf24", // Amber 400
					light: "#fcd34d",
					dark: "#d97706",
				},
				"black-100": "#0f172a",
				"black-200": "#020617",
				"white-100": "#f8fafc",
			},
			boxShadow: {
				card: "0px 35px 120px -15px #1e293b",
				glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
			},
			screens: {
				xs: "450px",
			},
			backgroundImage: {
				"hero-pattern": "url('/herobg.webp')",
				"glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
			},
		},
	},
	plugins: [],
};
export default config;

