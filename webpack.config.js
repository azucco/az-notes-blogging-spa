const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
    entry: './app.module.js',
    output: {
        filename: 'aznotes-webpack.bundle.js',
        path: path.resolve(__dirname, '')
    },
    module: {
        rules: [
            { test: /\.(html)$/, use: 'html-loader' },
            {
                test: /\.(scss)$/,
                use: [
                    "style-loader", // creates style nodes from JS string
                    "css-loader",   // translate CSS into CommonJS
                    "sass-loader"   // compile SASS to CSSS
                ]
            },
            {
                test: /\.(css)$/,
                use: [
                    "style-loader", // creates style nodes from JS string
                    "css-loader"   // translate CSS into CommonJS
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({ template: './app.index.html' })
    ]
};
