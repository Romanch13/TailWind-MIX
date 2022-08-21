let mix = require('laravel-mix');
require('mix-tailwindcss');
mix.js('src/js/*.js', 'js');
mix.sass('src/sass/app.sass', 'css');

mix.tailwind('./tailwind.config.js');

mix.browserSync({
  server: {
    baseDir: 'public',
  },
  files: ['public/**/*', 'public/*.html'],
});
mix.disableNotifications();
mix.setPublicPath('public');
