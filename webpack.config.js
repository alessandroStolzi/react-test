const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src/client/app');
const INDEX_DIR = path.resolve(__dirname, 'src/client');
const config = {
  entry: `${APP_DIR}/index.js`,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)?/, include: APP_DIR, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins() {
                // post css plugins, can be exported to postcss.config.js
                return [require('precss'), require('autoprefixer')];
              }
            }
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(eot?.+|svg?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/,
        use: 'file-loader?name=assets/[name]-[hash].[ext]'
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loaders: ['eslint-loader']
      }
    ]
  },
  plugins: [
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      title: 'React-start',
      // baseUrl: global.cmdOptions.baseUrl,
      template: `${INDEX_DIR}/index.html`,
      // favicon: 'client/icon/favicon.ico',
      inject: 'body',
      hash: true
    })
  ]
};

module.exports = config;
