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
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer:{
    inline:true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: 'babel-loader',
        exclude: /node.modules/,
        include: __dirname,
        query: {
          presets: ['es2015', 'react', 'stage-0']
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