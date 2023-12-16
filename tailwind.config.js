/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: [
        'border-red-500',
        'border-green-500',
        'border-sky-500',
        'hover:border-red-500',
        'hover:border-green-500',
        'hover:border-sky-500',
        {
          pattern: /bg-(zinc|red|orange|green|cyan|blue|violet)-(100|200|300|400|500|800)/,
          variants: ['lg', 'hover', 'focus', 'lg:hover'],
        },
        {
          pattern: /text-(zinc|red|orange|green|cyan|blue|violet)-(100|200|300|400|500|800|900)/,
        },
      ],
    },
  },
  theme: {
    extend: {
      height: {
        '30': '7.5rem'
      },
      maxWidth: {
        '5/12': '41.666667%',
        '2/3': "66%",
        '1/3': "33%"
      },
      minWidth: {
        '5/12': '41.666667%',
        '2/3': "66%",
        '1/3': "33%"
      }
    },
  },
  plugins: [],
}
