var Webpack = require('webpack')
var path = require('path')
var nodeModulesPath = path.resolve(__dirname, 'node_modules')
// var buildPath = path.resolve(__dirname, 'public', 'build')
// var mainPath = path.resolve(__dirname, 'app', 'main.js')

var ENV = process.env

var commonsPlugin = new Webpack.optimize.CommonsChunkPlugin('common/common.js')

var config = {

  // We change to normal source mapping, if you need them
  devtool: 'source-map',
  entry: {
    dispenseApp: './dev/dispenseApp/app.js',
    dispenseManager: './dev/dispenseManager/app.js'
  },
  output: {
    path: './apps/',
    publicPath: '/apps/',
    filename: '[name]/[name].entry.js'
  },
  plugins: [
    commonsPlugin,
    new Webpack.DefinePlugin({ 'env.vars': JSON.stringify(ENV.npm_package_config_api_prod) }),
    new Webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
  ],
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
