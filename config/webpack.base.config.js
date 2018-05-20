/* global require, module, */
const env = require('yargs').argv.env;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isBuild = env === 'build';

const config = {
    devtool: 'source-map',
    module: {
        rules: [
            {
                // ng-loader
                // https://github.com/owen-it/ng-loader
                // Load .ng component files.
                test: /\.ng$/,
                use: ['ng-loader'],
            },
            {
                // babel-loader
                // https://github.com/babel/babel-loader
                // Transpile javascript
                // eslint-loader
                // https://github.com/webpack-contrib/eslint-loader
                // Lint files when processing
                test: /\.js$/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ],
                exclude: /node_modules/
            },
            {
                // file-loader
                // https://github.com/webpack/file-loader
                // Load and emit files as part of build
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader',

            },
            {
                // raw-loader
                // https://github.com/webpack/raw-loader
                // Load html files as strings
                test: /\.html$/,
                loader: 'raw-loader',
            },
            {
                // mini-css-extract
                // https://github.com/webpack-contrib/mini-css-extract-plugin
                test: /\.css$/,
                use: [
                    isBuild ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader'
                ]
            }
        ],
    },
    plugins: [
        // mini-css-extract
        // https://github.com/webpack-contrib/mini-css-extract-plugin
        new MiniCssExtractPlugin({
            filename: 'angularjs-bootstrap.[name].css',
            chunkFilename: 'angularjs-bootstrap.[name].css',
        })
    ]
};

module.exports = config;
