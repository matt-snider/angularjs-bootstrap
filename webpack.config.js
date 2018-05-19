/* global module, require, process */
const lifecycle = process.env.npm_lifecycle_event;

let config;
if (lifecycle.startsWith('docs')) {
    config = require('./config/webpack.docs.config');
} else if (lifecycle.startsWith('lib')) {
    config = require('./config/webpack.lib.config');
}

module.exports = config;