let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .js('resources/assets/js/salary_calc.js', 'public/js')
   .less('resources/assets/less/app.less', 'public/css')
    .less('resources/assets/less/salarycalc.less', 'public/css')
    .less('resources/assets/less/wordcounter.less', 'public/css')
    .copy('resources/assets/img', 'public/img');
