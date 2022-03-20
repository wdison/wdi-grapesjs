const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: ['./main.js'],
    mode: "development",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
    })],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    resolve: {
        alias: {
            'grapesjs': path.resolve(__dirname, './node_modules/grapesjs'),
            'grapesjs-preset-webpage': path.resolve(__dirname, './node_modules/grapesjs-preset-webpage'),
        }
      },
};