/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
     extend: {colors: {
        'h-readers': '#6e6e68',
        'p-readers': '#45423d',
        'discount': '#d04928',
        'strike-price': '#cf4520'
      },
      backgroundColor: {
        'readers-primary': '#f2f2f2',
        'readers-secondary': '#ffffff',
      },
      screens: {
        sm: '0px',
        md: '425px',
        lg: '768px',
      },}
  },
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
}
