/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '30':'7.5rem'
      },
      maxWidth: {
        '5/12': '41.666667%',
        '2/3' :"66%",
        '1/3' :"33%"
      },
      minWidth:{
        '5/12': '41.666667%',
        '2/3' :"66%",
        '1/3' :"33%"
      }
    },
  },
  plugins: [],
}

