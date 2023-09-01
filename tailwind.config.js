/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html", "./*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'top-pattern': "url('/images/bg-top.svg')",
        'bottom-pattern': "url('/images/bg-bottom.svg')"
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif']
      },
      fontSize: {
        'base': ['15px']
      },
      colors: {
        custom: {
          VeryLightGrayishBlue: 'hsl(240, 78%, 98%)',
          LightGrayishBlue: 'hsl(234, 14%, 74%)',
          GrayishBlue: 'hsl(233, 13%, 49%)',
          DarkGrayishBlue: 'hsl(232, 13%, 33%)',
          Grad1: 'hsl(236, 72%, 79%)',
          Grad2: 'hsl(237, 63%, 64%)',
          Grad3: 'hsl(234, 72%, 79%)',
          Grad4: 'hsl(235, 63%, 64%)'
        },
      },
    },
  },
  plugins: [],
}

