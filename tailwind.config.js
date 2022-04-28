module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      colors: {
        'cs-primary': '#160E33', //Primary custom color
      },
      boxShadow: {
        'glow-xs': '0px 0px 0.4rem rgba(239, 68, 68, 0.4)',
        'glow-md': '0px 0px 3.125rem rgba(239, 68, 68, 0.4)',
        'focus-sm': '0 0 0 0.188rem rgba(239, 68, 68, 0.5)',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '540/673': '540 / 673',
      },
      fontFamily: { sans: ['Rubik', 'sans-serif'] },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
