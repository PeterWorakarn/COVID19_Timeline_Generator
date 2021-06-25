module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          white: "#FEFDFB",
          black:"#364F77",
          background: "#F6B5B1",
          light: "#E3E3E3",
          DEFAULT: "#EF5B73",
          dark: "#14295A",
          yellow: "#FCBE15",
          purple: "#DAC3DF"
        }
      },
      fontFamily: {
        fontMain:'Prompt, san-serif',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
