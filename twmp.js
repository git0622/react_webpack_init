module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                // 'style-loader', //将.css文件添加到html文件的<head>中(以<style></style>形式).
                'css-loader',
                // {
                //     loader: "postcss-loader", //css添加浏览器前缀
                //     options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                //         plugins: (loader) => []
                //     }
                // }
            ]
        },
        {
            test: /\.less$/,
            use: [
                devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                // 'style-loader', //将.css文件添加到html文件的<head>中(以<style></style>形式).
                'css-loader',//寻找css文件
                // {
                //     loader: "postcss-loader", //css添加浏览器前缀
                //     options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                //         plugins: (loader) => []
                //     }
                // },
                'less-loader'//寻找识别出less文件,less插件再将less文件转化为css文件
            ]
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                // 'style-loader', //将.css文件添加到html文件的<head>中(以<style></style>形式).
                "css-loader",
                // {
                //     loader: "postcss-loader", //css添加浏览器前缀
                //     options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                //         plugins: (loader) => []
                //     }
                // },
                "sass-loader"
            ]
        },
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
},