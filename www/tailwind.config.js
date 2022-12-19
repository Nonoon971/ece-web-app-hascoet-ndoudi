/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",

    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'test':['gt-super', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
      'sstitre':['sohne', "Helvetica Neue", 'Helvetica', 'Arial', 'sans-serif']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-font-inter')
  ]
}
