/* global module, */
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
                // css-loader/style-loader
                // Reference: https://github.com/webpack/css-loader
                // Reference: https://github.com/webpack/style-loader
                // Allow loading css through js
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
        ],
    }
};

module.exports = config;