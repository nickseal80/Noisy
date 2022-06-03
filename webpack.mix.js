const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/bootstrap.js', 'public/js/bootstrap.js');
mix.js('resources/js/authenticate/sign-in/index.js', 'public/js/authentication/sign-in');

mix.copyDirectory('resources/fonts', 'public/fonts');

mix.css('resources/css/fonts.css', 'public/css');

mix.sass('resources/sass/base.scss', 'public/css');
mix.sass('resources/sass/authentication/index.scss', 'public/css/authentication');
