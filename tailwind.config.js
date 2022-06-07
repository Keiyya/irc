module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        orange: 'hsl(25, 97%, 53%)',
        whiteCol: 'hsl(217, 12%, 63%)',
        mediumGrey: 'hsl(216, 12%, 54%)',
        darkBlue: 'hsl(213, 19%, 18%)',
        bgBlue: 'hsla(215, 23%, 23%, 0.8)',
        veryDarkBlue: 'hsl(216, 12%, 8%)'
      }
    },
  },
  plugins: [require("daisyui")],
}
