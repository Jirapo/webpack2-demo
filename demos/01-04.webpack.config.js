'use strict';
let path = require('path');

module.exports = (options) => {
    return ['001', '001-0','002', '003', '004-babili'].map(en => {
      let config = {
        entry: {},
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
      config.entry[en] = `./${en}/main.js`
      return config;
    })
  }
