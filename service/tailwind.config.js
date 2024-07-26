/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
export const darkMode = ['class'];
export const content = [
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
  './src/**/*.{ts,tsx}',
];
export const prefix = '';
export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    red: '#FB4545',
    sky: '#DBF2F9',
    'yellow-0': '#FFFBE8',
    'yellow-50': '#FFFAD2',
    'yellow-100': '#FFF6C0',
    'yellow-200': '#FFEA85',
    'yellow-300': '#FFD63F',
    'yellow-400': '#FFBE0B',
    'yellow-500': '#F4A400',
    'yellow-600': '#D37B00',
    'yellow-700': '#A85500',
    'yellow-800': '#8A4209',
    'yellow-900': '#75360E',
    'yellow-950`': '#451B03',
    'green-50': '#F1F9FA',
    'green-100': '#DBEFF2',
    'green-200': '#BBE0E6',
    'green-300': '#8CC8D4',
    'green-400': '#55A7BA',
    'green-500': '#3A8BA0',
    'green-600': '#337287',
    'green-700': '#2F5D6F',
    'green-800': '#2D4E5D',
    'green-900': '#2A434F',
    'green-950': '#172A35',
    'gray-50': '#F4F7F8',
    'gray-100': '#E1E8EA',
    'gray-200': '#D4DBDD',
    'gray-300': '#C0C7C9',
    'gray-400': '#ACB3B5',
    'gray-500': '#989FA1',
    'gray-600': '#7A8183',
    'gray-700': '#5C6365',
    'gray-800': '#3E4547',
    'gray-900': '#3E4547',
  },
  backgroundColor: {
    'button-primary': '#55A7BA',
  },
  textColor: {
    primary: '#3A8BA0',
  },
  boxShadow: {
    20: '0px 2px 10px 0px rgba(0, 0, 0, 0.10)',
    40: '0px 2px 15px 0px rgba(0, 0, 0, 0.15)',
  },
  fontSize: {
    'h-xl': ['100px', '120px'],
    'h-l': ['54px', '65px'],
    'h-m': ['36px', '54px'],
    'h-s': ['30px', '36px'],
    'b-xxl': ['24px', '29px'],
    'b-xl': ['20px', '24px'],
    'b-l': ['18px', '26px'],
    'b-m': ['16px', '26px'],
    'b-s': ['14px', '18px'],
    'd-s': ['12px', '16px'],
    'd-xs': ['10px', '14px'],
  },
  extend: {
    fontFamily: {
      pretend: ['Pretendard', 'Montserrat'],
    },
  },
};
export const plugins = [
  // eslint-disable-next-line no-undef
  require('tailwindcss-animate'),
  plugin(function ({ addUtilities }) {
    const newUtilities = {
      '.lottery-effect': {
        borderRadius: '8px',
        background: 'var(--Common-white-0, #FFF)',
        boxShadow: '0px 1px 14px 0px rgba(58, 139, 160, 0.20)',
        backdropFilter: 'blur(22.5px)',
      },
      '.quiz-effect': {
        borderRadius: '8px',
        background: 'var(--Common-white-0, #FFF)',
        boxShadow: '0px 1px 13px 0px #DEE6EF',
        backdropFilter: 'blur(20px)',
      },
      '.eventCardBg-effect': {
        borderRadius: '8px',
        background: 'var(--Common-white-0, #FFF)',
        boxShadow: '0px 1px 13px 0px #DEE6EF',
        backdropFilter: 'blur(20px)',
      },
    };

    addUtilities(newUtilities, ['responsive', 'hover']);
  }),
];
