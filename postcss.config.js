module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-nested': {},
    'postcss-preset-env': {
      browsers: 'last 2 versions',
    },
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
}
