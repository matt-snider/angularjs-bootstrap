/* global require, module */
const path = require('path');
const env = require('yargs').argv.env;
const pkg = require(path.resolve('./package.json'));
const baseConfig = require('./webpack.base.config');

const libraryName = pkg.name;
let outputFile, mode;
if (env === 'build') {
    mode = 'production';
    outputFile = libraryName + '.min.js';
} else {
    mode = 'development';
    outputFile = libraryName + '.js';
}


const config = Object.assign(baseConfig, {
    entry: path.resolve('./src/index.js'),
    output: {
        path: path.resolve('./dist/lib'),
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    mode: mode,
    externals: {
        'angular': 'angular',
        'angular-animate': 'angular-animate',
        'angular-messages': 'angular-messages',
        'octicons': 'octicons',
    },
});

module.exports = config;
