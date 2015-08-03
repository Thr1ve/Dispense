var Webpack = require('webpack')
var path = require('path')

var nodeModulesPath = path.resolve(__dirname, 'node_modules')
// var buildPath = path.resolve(__dirname, 'public', 'build')

var config = {
  context: __dirname,
  devtool: 'eval-source-map',
  entry: [
    // 'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './dev/interface/main.js'],
    // './test/main.js'],
  output: {
    // path: './dev/interface/',
    path: './build',
    filename: 'bundle.js'
    // publicPath: '/dev/interface/'
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
    //isue
    new Webpack.DefinePlugin({ 'env.vars': JSON.stringify('http://localhost:8080/api/') })
  ]
}

module.exports = config

// module.exports = {
//   entry: ['./test/main.js'],
//   output: {
//     path: './build',
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [{
//       test: /\.js$/,
//       loader: 'babel',
//       exclude: [nodeModulesPath]
//     }, {
//       test: /\.css$/,
//       loader: 'style!css'
//     }]
//   }
//   // plugins: [
//   //   new Webpack.HotModuleReplacementPlugin()
//   // ]
// }
