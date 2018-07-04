let mix = require('laravel-mix');

mix.webpackConfig({
	module: {
		loaders: [
		{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
		]
	}
});

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
 mix.autoload({
 	jquery: ['$', 'window.jQuery', 'jQuery'],
 	flexslider: 'flexslider',
 	imagesloaded: 'imagesloaded',
 	animejs: 'anime',
 });

 mix.js('resources/assets/js/app.js', 'public/js')
 .extract(['jquery', 'flexslider', 'imagesloaded', 'animejs'])
 .sass('resources/assets/sass/app.scss', 'public/css');
