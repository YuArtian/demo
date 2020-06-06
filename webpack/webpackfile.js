let path = require('path')

module.exports = {
  mode:'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    //绝对路径
    path: path.resolve(__dirname, 'dist'),
  },
}