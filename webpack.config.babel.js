const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const config = {
  name: 'client',
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, 'built/'),
    filename: 'client.js',
    publicPath: '/built/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' })
      }
    ]
  },
  plugins: [new ExtractTextPlugin('styles.css')]
};

const serverConfig = {
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  entry: [
    './serverEntry.js'
  ],
  output: {
    path: path.join(__dirname, 'built/'),
    filename: 'server.js',
    publicPath: 'built/',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'null'
      },
      {
        test: /\.scss$/,
        loader: 'css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  }
};

module.exports = [config, serverConfig];
