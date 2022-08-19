module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      zIndex: {
        '1000': '1000',
      },
      screens: {
        'tall': { 'raw': '(max-width: 767px)' },
      }
    },
  },
  plugins: [],
}