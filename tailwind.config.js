module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['sofia-pro', 'sans-serif'],
      },
      colors: {
        status: {
          success: {
            primary: '#23BA7B',
            dark: '#055C2D',
            light: '#D9FFE3',
          },
        },
        purple: {
          primary: `#892885`,
          900: `#431441`,
          800: `#521850`,
          700: `#671E64`,
          600: `#7B2478`,
          500: `#892885`,
          400: `#AC69AA`,
          300: `#D0A9CE`,
          200: `#D0A9CE`,
          100: `#F3EAF3`,
          50: `#F9F4F9`,
        },
        gray: {
          900: '#231F21',
        },
      },
    },
  },
  plugins: [],
}
