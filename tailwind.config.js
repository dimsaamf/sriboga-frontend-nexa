/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream-sriboga': '#fffbf0',
        'biru-sriboga': '#060A6B',
        'biru-footer': '#012fa7',
      },
    },
    fontFamily: {
      'sriboga1': ['Rubik'],
    },
  },
  plugins: [],
}

