/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['border-red-500', 'border-green-500', 'border-sky-500', 'hover:border-red-500', 'hover:border-green-500', 'hover:border-sky-500', "bg-zinc-500", "bg-red-500", "bg-orange-500", "bg-green-500", "bg-cyan-500", "bg-blue-500", "bg-violet-500", "bg-zinc-400", "bg-red-400", "bg-orange-400", "bg-green-400", "bg-cyan-400", "bg-blue-400", "bg-violet-400"],
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
