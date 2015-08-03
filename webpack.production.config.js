var Webpack = require('webpack')
var path = require('path')
var nodeModulesPath = path.resolve(__dirname, 'node_modules')
// var buildPath = path.resolve(__dirname, 'public', 'build')
// var mainPath = path.resolve(__dirname, 'app', 'main.js')

var commonsPlugin =
  new Webpack.optimize.CommonsChunkPlugin('common.js')

var config = {

  // We change to normal source mapping, if you need them
  devtool: 'source-map',
  entry: {
    dispenseApp: './dev/dispenseApp/app.js',
    dispenseManager: './dev/dispenseManager/app.js'
  },
  output: {
    path: './apps/',
    filename: '[name]/[name].entry.js'
  },
  plugins: [commonsPlugin],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [nodeModulesPath]
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
}

module.exports = config
