'use strict';
let path = require('path');
let BabiliPlugin = require("babili-webpack-plugin");


module.exports = (options) => {
    let config = {
        entry: {
            '004': './main.js'
        },
        output: {
            path: './js',
            filename: options.dev ? '[name].js' : '[name].min.js'
        },
        module: {
            rules: [
                // {
                //     test: /\.js$/,
                //     loader: 'babel-loader',
                //     query: {
                //         babelrc: false,
                //         presets: ["babili"]
                //     }
                // }
            ]
        },

        plugins: [
            new BabiliPlugin()
        ],
        devtool: false,
        context: __dirname
    }

    return config
}
