/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/**/*.liquid",
    "./templates/**/*.json",
  ],
  theme: {
    extend: {
      colors: {
        'flores-primary': '#005E75',
        'flores-light': '#9AD7E5',
        'flores-footer': '#143F58',
        'flores-separator': '#E2F4F7',
      },
      fontFamily: {
        'heading': ['Cormorant Garamond', 'serif'],
        'body': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
