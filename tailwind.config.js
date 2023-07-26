/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f21bd',
        secondary: '#def2f8',
        tertiary: '#008dd5',
        accent: '#c2f929',
        black: '#030e12',
        primaryText: '#030e12',
        secondaryText: '#fff',
        primaryDark: '#0d1ca2',
        secondaryDark: '#bbccd2',
        tertiaryDark: '#0071ab',
        accentDark: '#a2d021',
      }
    },
  },
  plugins: [],
}
