module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
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
        },
        gray: {
          900: '#231F21',
        },
      },
    },
  },
  plugins: [],
}
