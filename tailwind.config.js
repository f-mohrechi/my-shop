/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#264653',
        'light': '#2a9d8f',
        'yellow': '#e9c46a',
        'orange': '#f4a261',
        'orange-2': '#e76f51',
        'fff': '#f7f7f7',
      },
      fontFamily: {
        'popins' : ['Poppins', 'sans-serif']
      }
    },
    screens:{
      'xs': '350px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
