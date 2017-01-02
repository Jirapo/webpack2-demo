'use strict';
let webpack = require('webpack')
let path = require('path');
let HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = (options) => {
    let config = {
        entry: {
            '006': './main.js',
            'vendor': './vendor.js'
        },
        output: {
            path: './js/006',
            filename: "[name].[chunkhash].js",
            chunkFilename: "[id].[chunkhash].js"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    query: {
                        babelrc: false,
                        presets: [
                            ["es2015", { "modules": false}], 
                            'react', 
                            'stage-2'
                        ],
                    }
                }
            ]
        },

        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: ['006', 'vendor', 'manifest'],
                minChunks: Infinity
            }),
            new HtmlWebpackPlugin({
              inject: true,
              template: path.resolve(__dirname, '../../index.html'),
            }),
        ],
        devtool: false,
        context: __dirname
    }

    return config
}
