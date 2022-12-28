/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    screens: {
      '2xl': {min: '1280px', max: '1920px'},
      // => @media (max-width: 1400px) { ... }
      xl: {min: '992px', max: '1279px'},
      // => @media (max-width: 1279px) { ... }
      lg: {min: '768px', max: '991px'},
      // => @media (min-width: 768px andmax-width: 992px) { ... }
      md: {min: '577px', max: '767px'},
      // => @media (min-width: 577px and max-width: 767px) { ... }
      sm: {min: '480px', max: '576px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }
      xs: {max: '480px'},
      // => @media (max-width: 480px) { ... }
    },

    extend: {
      colors: {
        white: '#ffff',
        imgBack: '#2D3139',
        graylight: '#535A61',
        black: '#000',
        icon: '#EBECEE',
      },
    },
  },
  plugins: [],
};
