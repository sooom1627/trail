/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '5/12': '41.666667%',
        '2/3' :"66%"
      },
      minWidth:{
        '5/12': '41.666667%',
        '2/3' :"66%"
      }
    },
  },
  plugins: [],
}

