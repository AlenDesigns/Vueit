const merge = require('webpack-merge');
const dev = require('./webpack.development.js');
const prod = require('./webpack.production');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
};

module.exports = env => { 
    if (env.NODE_ENV === 'dev') {
        return merge(dev, config);
    }

    return merge(prod, config);
}; 