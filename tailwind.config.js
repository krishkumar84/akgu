/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customblue: 'rgb(23 49 92)',
        customYellow:' #fff500',
        customWhite: 'rgb(240 240 240)',
        customBlack: 'rgb(55 55 55)',
        customGreen:'rgb(54 133 111)',
        customGrey:'rgb(134 133 122)'
      }
    },
  },
  plugins: [],
}

