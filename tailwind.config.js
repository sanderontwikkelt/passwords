module.exports = {
  mode: 'jit',
  purge: {
    safeList: [],
    content: ['./src/**/*.tsx', './src/**/*.ts'],
  },
  theme: {
    extend: {
      colors: {
        primary: '#3291ff',
        main: '#000',
        shaded: '#888',
        element: '#111',
        white: '#fff',
        light: '#e9e9e9',
      },
      borderColor: {
        main: '#333',
      },
    },
  },
  variants: {},
  plugins: [],
};
