const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: {
    index: './src/index.js',
    // print: './src/print.js'
  },
  output: {
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].chunk.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: '/node_modules/'
      }
    ]
  }

}