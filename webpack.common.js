const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader', //2. Inject styles into DOM 
                    'css-loader' //1. Turns css into JavaScript
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: ['asset/resource'],
            },
        ],
    },
    output: {
        clean: true,
    }
};