module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      secondary: 'Mulish',
    },
    screens: {
      
      // ss: {'min':'0px','max':'319px'},
      // xs: {'min':'320px','max':'639px'},
      // sm: {'min':'640px','max':'767px'},
      // md: {'min':'768px','max':'1023px'},
      // lg: {'min':'1024px','max':'1279px'},
      // xl: {'min':'1280px'}
     
      xs: '320px',
      ss: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {
      colors: {
        primary: '#0E1112',
        grey: '#484B4B',

        accent: '#EEF7F9',
      },
    },
  },
  plugins: [],
};
