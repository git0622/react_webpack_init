const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: 'production',//webpack4用此方法，自动在环境变量process.env生成一个process.env.NODE_ENV = production
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
    output: {
        // filename: '[name].bundle.js',
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        // new UglifyJSPlugin({ //webpack4会自动启用此插件
        //     sourceMap: true
        // }),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('production')
        // }),//webpack3 需要手动设置process
        new MiniCssExtractPlugin({
            // filename: '[name].css',
            filename: "[name].[contenthash].css",
            chunkFilename: "[name].[contenthash].css",
        })
    ],

});