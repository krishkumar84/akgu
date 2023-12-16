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
        customWhite: 'rgb(225 225 225)'
      }
    },
  },
  plugins: [],
}

