var Webpack = require('webpack')
var path = require('path')

var ENV = process.env

var nodeModulesPath = path.resolve(__dirname, 'node_modules')
// var buildPath = path.resolve(__dirname, 'public', 'build')

var config = {
  context: __dirname,
  devtool: 'eval-source-map',
  entry: [
    // 'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './dev/dev-interface/main.js'],
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: [nodeModulesPath]
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.DefinePlugin({ 'env.vars': JSON.stringify(ENV.npm_package_config_api_dev) })
  ]
}

module.exports = config
