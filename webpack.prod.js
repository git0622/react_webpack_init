const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        runtimeChunk: {
            "name": "manifest" //用于管理被分出来的包
        },

        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 5,
            name: false,
            cacheGroups: {
                // commons:{
                //     name:'common',
                //     chunks:'all',
                //     minSize:1,
                //     priority:0
                // },
                vendor: {
                    name: 'vendor',
                    chunks: 'all',
                    priority: -10,
                    reuseExistingChunk: false,
                    // test: /node_modules\/(.*)\.js/
                    test: /[\\/]node_modules[\\/]/,
                },
                styles: {
                    name: 'styles',
                    test: /\.(scss|css)$/,
                    chunks: 'all',
                    minChunks: 1,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        }
    },
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ],

});