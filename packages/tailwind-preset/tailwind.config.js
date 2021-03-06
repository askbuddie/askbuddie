module.exports = {
  theme: {
    extend: {
      fontFamily: {},
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1536px',
      },
      colors: {
        askbuddie: {
          red: '#E53935',
          black: '#2D2D2D',
        },
        white: '#FFFFFF',
        black: '#000000',
        gray: {
          100: '#F2F2F2',
          200: '#DFDADB',
          300: '#D2CACC',
          400: '#BAAEBC',
          500: '#9B909D',
          600: '#7A6E7C',
          700: '#5A4662',
          800: '#3E3246',
          900: '#301E38',
        },
      },
      fontSize: {
        sm: ['0.875rem', { lineHeight: '1.125rem' }],
        lg: ['1.125rem', { lineHeight: '1.5rem' }],
        '3xl': ['2rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.625rem', { lineHeight: '3.25rem' }],
      },
    },
  },
}
