const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const assetsPath = path.join(__dirname, 'public');
const loaders = [{
  loader: 'babel',
  exclude: /node_modules/,
  test: /\.js$|\.jsx$/,
  query: {
    cacheDirectory: true,
    presets: ['react', 'es2015']
  }
},{
  loader: 'json-loader',
  test: /\.json$/
}]

module.exports = [{
  name: 'client',
  entry: {
    bundle: './src/client'
  },
  output: {
    path: assetsPath,
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    loaders: loaders
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}, {
  name: 'server',
  target: 'node',
  entry: {
    server: './src/server'
  },
  output: {
    path: assetsPath,
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    loaders: loaders
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}, {
  entry: {
    style: './src/stylesheets/main.js'
  },
  output: {
    path: path.join(__dirname, 'public/css'),
    publicPath: '/css/',
    filename: '[name].css'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ]
  },
  plugins: [
        new ExtractTextPlugin("[name].css")
    ]
}];
