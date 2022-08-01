const mix = require('laravel-mix');
const path = require('path');

const config = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"]
    }
}

mix.webpackConfig(config);

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

mix.alias({
    ziggy: path.resolve('vendor/tightenco/ziggy/dist'),
})

mix.ts('resources/ts/index.tsx', 'public/js');

mix.copyDirectory('resources/fonts', 'public/fonts');

mix.css('resources/css/fonts.css', 'public/css');

mix.sass('resources/sass/base.scss', 'public/css');

mix.copyDirectory('resources/images', 'public/images');
