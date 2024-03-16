/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    backgroundColor: {
      primary: 'rgb(var(--pui-color-background-primary) / <alpha-value>)',
      secondary: 'rgb(var(--pui-color-background-secondary) / <alpha-value>)',
    },

    textColor: {
      primary: 'rgb(var(--pui-color-text-primary) / <alpha-value>)',
      secondary: 'rgb(var(--pui-color-text-secondary) / <alpha-value>)',
    },

    extend: {},
  },
  plugins: [],
};
