/* global __dirname, require, module */
const env = require('yargs').argv.env;
const pkg = require('./package.json');
const baseConfig = require('./webpack.base.config');

let libraryName = pkg.name, outputFile;
let mode = 'development';
if (env === 'build') {
    mode = 'production';
    outputFile = libraryName + '.min.js';
} else {
    outputFile = libraryName + '.js';
}


const config = Object.assign(baseConfig, {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/dist/lib',
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    mode: mode,
});

module.exports = config;
