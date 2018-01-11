var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var INDEX_DIR = path.resolve(__dirname, 'src/client');
var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  plugins: [
   // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      title: 'Extra Banca',
      // baseUrl: global.cmdOptions.baseUrl,
      template: INDEX_DIR + '/index.html',
      // favicon: 'client/icon/favicon.ico',
      inject: 'body',
      hash: true
    })
  ]
};

module.exports = config;