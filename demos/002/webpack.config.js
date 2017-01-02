'use strict';
let path = require('path');

module.exports = (options) => {
    return {
        entry: {
            '002': './main.js'
        },
        output: {
            path: './js',
            filename: options.dev ? '[name].js' : '[name].min.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    query: {
                        babelrc: false,
                        presets: [["es2015", { "modules": false}]]
                    }
                }
            ]
        },


        devtool: false,
        context: __dirname
    }
}
