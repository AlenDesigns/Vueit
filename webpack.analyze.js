const merge = require('webpack-merge');
const common = require('./webpack.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
};

module.exports = merge(common, config);