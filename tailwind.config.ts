import type { Config } from 'tailwindcss'

// [TIPS] generate from: https://uicolors.app/create
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f4f3ff',
          100: '#ece9fe',
          200: '#dbd5ff',
          300: '#c0b4fe',
          400: '#a189fc',
          500: '#7749f8',
          600: '#7337f0',
          700: '#6425dc',
          800: '#531eb9',
          900: '#471b97',
          950: '#2a0f66',
        },
        brown: {
          50: '#fef7ee',
          100: '#fdeed7',
          200: '#fad9ae',
          300: '#f6bc7b',
          400: '#f2994a',
          500: '#ee7921',
          600: '#df5f17',
          700: '#b94815',
          800: '#933919',
          900: '#773217',
          950: '#40170a',
        },
        danger: {
          50: '#fef2f2',
          100: '#fde3e3',
          200: '#fccccc',
          300: '#f9a8a8',
          400: '#f47575',
          500: '#eb5757',
          600: '#d62c2c',
          700: '#b42121',
          800: '#951f1f',
          900: '#7c2020',
          950: '#430c0c',
        },
      },
    },
  },
}
