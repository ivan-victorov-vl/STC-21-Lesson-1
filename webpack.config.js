const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.jsx",
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },

            // Loading images
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'img',
                        name: '[name]-[sha1:hash:7].[ext]'
                    }
                }]
            },

            // Loading fonts
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts',
                        name: '[name].[ext]'
                    }
                }]
            },
            // Loading css
            {
                test: /\.(css)$/,
                use: [ MiniCssExtractPlugin.loader , 'css-loader']
            },
            // Loading scss
            {
                test: /\.(s[ca]ss)$/,
                use: [ MiniCssExtractPlugin.loader , 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hello World',
            buildTime: new Date().toISOString(),
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'main-[hash:8].css'
        })
    ]
};