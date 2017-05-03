var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    main: [
      
      './src/entry/index.js'
    ]
  },
  output: {
    path: path.join(__dirname,'build'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: 'babel-loader',
        exclude: /node.modules/,
        include: __dirname,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loaders: 'url-loader?limit=5192&name=img/[name].[hash:8].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less?sourceMap'
      }
    ]
  },
  plugins: [

  ]
}