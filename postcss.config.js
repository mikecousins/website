const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('tailwindcss')('tailwind.config.js'),
    require('autoprefixer'),
    ...([
          purgecss({
            content: [
              './public/**/*.html',
              './src/**/*.js',
              './src/**/*.jsx',
              './src/**/*.ts',
              './src/**/*.tsx',
            ],
            defaultExtractor: content =>
              content.match(/[\w-/.:]+(?<!:)/g) || [],
          }),
        ]),
  ],
};