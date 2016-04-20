var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var loaders = [
  {
    "test": /\.js?$/,
    "exclude": /node_modules/,
    "loader": "babel",
    "query": {
      "presets": [
        "es2015"
      ],
      "plugins": []
    }
  },
  {
    "test": /\.css?$/,
    "loader": "style!css"
  },
  {
    "test": /\.scss?$/,
    "loader": "style!css!sass"
  },
  {
    "test": /\.(png|jpg)$/,
    "loader": "url?limit=8192"
  },
  {
    "test": /\.html$/,
    "loader": "html"
  },
];

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve('src', 'main.js'),
  output: {
    path: path.resolve('build'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    loaders: loaders
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '!!html!' + path.resolve('src', 'index.tpl.html'),
      inject: 'body',
      favicon: path.resolve('src', 'favicon.ico'),
      filename: 'index.html'
    })
  ]
};
