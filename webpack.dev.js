const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
console.log("dev============");
module.exports = merge(common, {
    mode:'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true, //允许在运行时更新各种模块，而无需进行完全刷新
        port:8011,
        proxy: {
            '/api': {
                target: 'http://10.119.59.187:8090',
                pathRewrite: {
                    '^/api': ''//需要rewrite重写
                }
            },
        }
    },
    plugins: [
        new webpack.NamedModulesPlugin(),//允许在运行时更新各种模块，而无需进行完全刷新
        new webpack.HotModuleReplacementPlugin(),//允许在运行时更新各种模块，而无需进行完全刷新，
    ],
});