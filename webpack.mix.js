let mix = require('laravel-mix');
require('mix-tailwindcss');
mix.js('src/js/*.js', 'js');
mix.sass('src/sass/app.sass', 'css').tailwind('./tailwind.config.js');
// mix.css(
//   'public/libs/bootstrap5.2/css/bootstrap.min.css',
//   'libs/bootstrap5.2/css/bootstrap.min.css'
// );
mix.browserSync({
  server: {
    baseDir: 'public',
  },
  files: ['public/**/*', 'public/*.html'],
});
mix.disableNotifications();
mix.setPublicPath('public');
