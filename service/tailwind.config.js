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
    primary: '#55A7BA',
    hyundai: '#0E2B5C',
    transparent: 'transparent',
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
    'yellow-950': '#451B03',
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
    'gray-900': '#040F11',
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
    translate: {
      'custom-4': '-50px',
      'custom-5': '-100px',
      'custom-2': '50px',
      'custom-1': '100px',
    },
    fontFamily: {
      pretend: ['Pretendard'],
      montserrat: ['Montserrat'],
    },
    boxShadow: {
      custom: '0px 1px 13px 0px #DEE6EF',
    },
    backdropBlur: {
      custom: '22.5px',
      'blur-20': '10px',
      'blur-40': '20px',
      'blur-60': '30px',
    },
    colors: {
      'custom-white': 'var(--Common-white-0, #FFF)',
      'modal-bg': 'var(--Alpha-Black50, rgba(165, 174, 174, 0.30))',
    },
    backgroundImage: {
      'custom-gradient':
        'linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))',
      'gradient-to-b':
        'linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.15) 100%)',
      'gradient-text':
        'linear-gradient(180deg, #FFF 39.36%, rgba(255, 255, 255, 0.60) 83.14%)',
      'gradient-attend':
        'linear-gradient(to bottom, #55A7BA 44.5%, #BBE0E6 100%)',
      'gradient-text-to-right':
        'linear-gradient(90deg, #55A7BA 45%, #ECD0A6 100%)',
      'gradient-light-gray':
        'linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.18) 100%)',
      'gradient-bottom-gray':
        'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 71.16%, rgba(4, 15, 17, 0.60) 96.42%)',
      'gradient-bottom-yellow':
        'linear-gradient(180deg, #55A7BA 10%, #FFFBE8 100%)',
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
        border: '0.952px solid #FFF',
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.70)0%, rgba(255, 255, 255, 0.21)100%)',
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
