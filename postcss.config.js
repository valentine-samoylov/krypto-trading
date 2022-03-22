module.exports = {
  plugins: [
    require('tailwindcss'),
    {
      'postcss-preset-env': {
        browsers: 'last 2 versions',
      },
    },
  ],
}
