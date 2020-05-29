const webpack = require('webpack');

const merge = require('webpack-merge');
const common = require('./webpack.common');

const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new webpack.ProgressPlugin(),
    ]
};

module.exports = merge(common, config);