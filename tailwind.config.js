/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customblue: 'rgb(28 63 119)',
        customYellow:' #fff500',
        customWhite: 'rgb(240 240 240)',
        customBlack: 'rgb(55 55 55)'
      }
    },
  },
  plugins: [],
}

