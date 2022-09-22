// @type {import('tailwindcss').Config} 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
       Montserrat: ['Montserrat', "sans-serif"],
       Inter: ['Inter', "sans-serif"],
      },
      backgroundImage: {
         'class': "url('/src/Asset/class.jpg')",
      },
    },
     colors: {
      'primary': '#C30010',
      'secondary': '#fafafa',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#FAF2F3',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#252B42',
      'gray': '#8C8C8C',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
      'black': '#262626',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
     require('tw-elements/dist/plugin')
  ],
}
