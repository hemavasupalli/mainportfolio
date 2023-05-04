/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        light: {
          background: '#f7f7f7',
          text: '#333',
        },
        dark: {
          background: '#222',
          text: '#f7f7f7',
        },
      },
    },
  },
    
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  
  plugins: [],
}

