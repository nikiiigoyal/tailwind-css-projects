/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode using a 'class'
  content: ["./**/*.{html,js}"], // Specifies where Tailwind should look for class usage (all .html and .js files)
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Adds 'Inter' font family under the name 'inter'
      }
    },
  },
  plugins: [], // No additional plugins are being used
}
