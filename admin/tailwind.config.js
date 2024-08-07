/** @type {import('tailwindcss').Config} */
export const darkMode = ['class'];
export const content = [
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
  './src/**/*.{ts,tsx}',
];
export const prefix = '';
export const theme = {
  container: {
    center: true,
    padding: '2rem',
    screens: {
      '2xl': '1400px',
    },
  },
  extend: {
    colors: {
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
      white: '#FFFFFF',
      black: '#000000',
      red: '#FB4545',
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
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
    keyframes: {
      'accordion-down': {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
  },
};
// eslint-disable-next-line no-undef
export const plugins = [require('tailwindcss-animate')];
