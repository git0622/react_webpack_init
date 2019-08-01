const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//管理输出
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//清理 /dist 文件夹

module.exports = {
    entry: './src/app.js',
    entry: {
        app: './src/app.js'
    },
    devtool: 'inline-source-map',//用于开发环境，用来追踪错误代码来源文件及位置，
    devServer: {
        // contentBase: './dist',
        // 根目录下dist为基本目录
        contentBase: path.join(__dirname, 'dist'),
        //允许在运行时更新各种模块，而无需进行完全刷新
        hot: true,
        // 自动压缩代码
        compress: true,
        // 服务端口为1208
        port: 1208,
        // 自动打开浏览器
        open: true
    },
    plugins: [
        new CleanWebpackPlugin(),//清理 /dist 文件夹
        new HtmlWebpackPlugin({
            title: 'Output Management', //输出文件标题,
            // 虚拟的html文件名 index.html
            filename: 'index.html',
            // 虚拟html的模板为 src下的index.html
            template: path.resolve(__dirname, './index.html')
        }),
        new webpack.NamedModulesPlugin(),//允许在运行时更新各种模块，而无需进行完全刷新
        new webpack.HotModuleReplacementPlugin()//允许在运行时更新各种模块，而无需进行完全刷新
    ],
    // output: {
    //     // filename: '[name].bundle.js',
    //     filename: '[name].[chunkhash].js',
    //     path: path.resolve(__dirname, 'dist')
    // },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // mode: "production",//标记无副作用时，webpack 编译标记，来启用 uglifyjs 压缩插件。
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }, { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }, {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};