const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",
            "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      azulPrimario: '#1D3354',
      azulSecundario: '#21537E',
      azulTerciario: '#1E699F',
      azulCuaternario: '#6998B7',
      azulAlerta: '#3FC1CA',
      blanco: '#FFFFFF',
      hueso: '#EEEFEF',
      grisClaro: '#6F6F6F',
      negro: '#000000'
    },
    extend: {
      keyframes: {
        loading: {
          '0%': { right: '-70%' },
          '100%': { left: '-100%' },
        },
      },
      animation: {
        lr: 'loading 0.5s linear',
      },
      spacing:{
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
      }
    },
  },
  plugins: [],
};
