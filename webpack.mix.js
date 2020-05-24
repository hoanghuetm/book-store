const mix = require('laravel-mix');

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

mix.js(['resources/js/app.js',
    'resources/js/active.js',
    'resources/js/bootstrap.js',
    'resources/js/bootstrap.min.js',
    'resources/js/jquery-3.2.1.min.js',
    'resources/js/modernizr-3.5.0.min.js',
    'resources/js/plugins.js',
    'resources/js/popper.min.js',
    ], 'public/js')
    .styles([
        'resources/css/animation.css',
        'resources/css/bicon.min.css',
        'resources/css/fakeloader.css',
        'resources/css/fancybox.css',
        'resources/css/font-awesome.min.css',
        'resources/css/fotorama.css',
        'resources/css/bootstrap.min.css',
        'resources/css/jquery-ui.min.css',
        'resources/css/lightbox.css',
        'resources/css/mainmenu.css',
        'resources/css/material-design-iconic-font.min.css',
        'resources/css/nivo-preview-2.css',
        'resources/css/nivo-slider.css',
        'resources/css/owl.carousel.min.css',
        'resources/css/owl.theme.default.min.css',
        'resources/css/pe-icon-7-stroke.css',
        'resources/css/simple-line-icons.css',
        'resources/css/slick.min.css',
    ], 'public/css/style.css')
    .sass('resources/sass/app.scss', 'public/css');
