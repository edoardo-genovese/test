/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extends: {
      colors: {
        'bg-readers-primary': '#f2f2f2',
        'bg-readers-secondary': '#ffffff',
        'h-readers': '#6e6e68',
        'p-readers': '#45423d',
        'discount': '#d04928',
        'strike-price': '#cf4520'
      },
      screens: {
        sm: '0px',
        md: '425px',
        lg: '768px',
      },
    }
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: 'ss_',
}
