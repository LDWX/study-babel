const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // mode: 'development',
  mode: 'production',
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
    })
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