/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        target: {
          primary: {
            default: '#EC5800',
            hover: '#CC4302',
            disabled: '#FF9732',
          },
          distructive: {
            default: '#EE4B2B',
            hover: '#C72C0E',
            disabled: '#FF7E65',
            'default-2': '#FFE4DF',
            'hover-2': '#FFCFC5',
          },
          invert: {
            default: '#FFFFFF',
            hover: '#ECF0F3',
          },
          secondary: {
            default: '#FFEED3',
            hover: '#FFDAA5',
          },
          tertiary: {
            default: '#ECF0F3',
            hover: '#DDE2E8',
          },
        },
        border: {
          default: {
            primary: '#C7CFDA',
            secondary: '#DDE2E8',
            tertiary: '#ECF0F3',
          },
          accent: '#FFDAA5',
          positive: '#C2F0D1',
          warning: '#FFF885',
          negative: '#FFCFC5',
        },
        background: {
          default: '#FFFFFF',
          secondary: '#F5F7F8',
          tertiary: '#DDE2E8',
          accent: '#FFEED3',
          positive: '#E0F8E7',
          warning: '#FFFBC5',
          negative: '#FFE4DF',
        },
        foreground: {
          default: {
            primary: '#2E3038',
            secondary: '#4F5360',
          },
          invert: {
            primary: '#F5F7F8',
            secondary: '#DDE2E8',
          },
          accent: {
            primary: '#CC4302',
            secondary: '#EC5800',
          },
          warning: {
            primary: '#BB6802',
            secondary: '#E29300',
          },
          negative: {
            primary: '#C72C0E',
            secondary: '#EE4B2B',
          },
        },
      },
    },
  },
  plugins: [],
};
