/* global require, module */
const path = require('path');

// Plugins
const BaseHrefWebpackPlugin = require('base-href-webpack-plugin').BaseHrefWebpackPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Config
const env = require('yargs').argv.env;
const baseConfig = require('./webpack.base.config');

let output = {};
let mode = 'development';
let plugins = baseConfig.plugins;

plugins.push(
    // HtmlWebpackPlugin
    // https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
        template: path.resolve('./src/docs/index.html'),
        inject: 'body',
    })
);

if (env === 'build') {
    output = {
        path: path.resolve('./dist/docs'),
        publicPath: 'https://cdn.rawgit.com/matt-snider/angularjs-bootstrap/gh-pages',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
    };
    mode = 'production';
    plugins.push(

        // BaseHrefWebpackPlugin
        // https://github.com/dzonatan/base-href-webpack-plugin
        // Inserts a <base> tag with the specified href (needed for gh-pages)
        new BaseHrefWebpackPlugin({
            baseHref: '/angularjs-bootstrap'
        }),

        // ExtractTextPlugin
        // https://github.com/webpack-contrib/extract-text-webpack-plugin
        // Extracts css each time it is imported
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true,
        })
    );
}

const config = Object.assign(baseConfig, {
    entry: path.resolve('./src/docs/app.js'),
    output: output,
    plugins: plugins,
    mode: mode,
    devServer: {
        contentBase: path.resolve('./src/docs'),
        stats: 'minimal',
        watchContentBase: true,
    },
});

module.exports = config;
