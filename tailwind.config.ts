import type { Config } from 'tailwindcss';

export default <Partial<Config>> {
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: '0.125rem',
      },
      colors: {
        'surface-dark': {
          50: '#edeef0',
          100: '#b0b4ba',
          200: '#777b84',
          300: '#696e77',
          400: '#5a6169',
          500: '#43484e',
          600: '#2e3135',
          700: '#272a2d',
          800: '#212225',
          900: '#18191b',
          950: '#111113',
        },
        'surface-light': {
          50: '#fcfcfd',
          100: '#f9f9fb',
          200: '#f0f0f3',
          300: '#e8e8ec',
          400: '#e0e1e6',
          500: '#d9d9e0',
          600: '#b9bbc6',
          700: '#8b8d98',
          800: '#80838d',
          900: '#60646c',
          950: '#1c2024',
        },
      },
    },
  },
};
