const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';
console.log("process.env.NODE_ENV========", process.env.NODE_ENV);
module.exports = {
    entry: {
        app: './app.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    // 'style-loader', //将.css文件添加到html文件的<head>中(以<style></style>形式).
                    'css-loader',
                    "postcss-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    // 'style-loader', //将.css文件添加到html文件的<head>中(以<style></style>形式).
                    'css-loader',//寻找css文件
                    "postcss-loader",
                    'less-loader',//寻找识别出less文件,less插件再将less文件转化为css文件
                    
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    // 'style-loader', //将.css文件添加到html文件的<head>中(以<style></style>形式).
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                    
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",//图片大小小于上限值，则将图片转base64字符串，；否则使用file-loader加载图片，都是为了提高浏览器加载图片速度
                        options: {
                            name: "[name].[hash:8].[ext]",
                            limit: 20000, // 小于 20kb 的图片进行 base64 编码。
                            publicPath: "assets/imgs",//build文件中引用图片时的路径
                            outputPath: "assets/imgs"//相对于output所输出文件的路径
                        }
                    }
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
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: true, //开启在控制台输出信息
        }),//清理 /dist 文件夹
        // new MiniCssExtractPlugin({
        //     filename: '[name].css',
        //     // filename: "[name].[contenthash].css",
        //     // chunkFilename: "[name].[contenthash].css"
        // }),

        new HtmlWebpackPlugin({
            title: 'Output Management', //输出文件标题,
            // 虚拟的html文件名 index.html
            filename: 'index.html',
            // 虚拟html的模板为 src下的index.html
            template: path.resolve(__dirname, './index.html'),
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }),

    ],
    // output: {
    //     // filename: '[name].bundle.js',
    //     filename: '[name].[chunkhash].js',
    //     path: path.resolve(__dirname, 'dist')
    // },

};