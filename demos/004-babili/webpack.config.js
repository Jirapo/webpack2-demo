'use strict';
let path = require('path');
let BabiliPlugin = require("babili-webpack-plugin");


module.exports = (options) => {
    let config = {
        entry: {
            '004-0': './main.js'
        },
        output: {
            path: './js',
            filename: '[name].min.js'
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

    return config
}
