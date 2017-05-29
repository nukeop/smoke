const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'smokeserver/static');
const APP_DIR = path.resolve(__dirname, 'frontend');

var config = {
  context: APP_DIR,
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    APP_DIR + '/index.jsx'
  ],
  output: {
    path: BUILD_DIR,
    publicPath: 'http://localhost:8080/static/',
    filename: './bundle.js',
    sourceMapFilename: '[file].map'
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: BUILD_DIR,
    publicPath: 'http://localhost:8080/static/',
    inline: true,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:5000',
      'Access-Control-Allow-Headers': 'X-Requested-With'
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract("css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]")
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.ProvidePlugin({
      "React": "react"
    }),
    new ExtractTextPlugin("styles.css"),
  ]
};

module.exports = config;
