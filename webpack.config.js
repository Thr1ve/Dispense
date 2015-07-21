var Webpack = require("webpack")
var path = require("path")

var devPath = path.resolve(__dirname, "dev")
var nodeModulesPath = path.resolve(__dirname, "node_modules")
var buildPath = path.resolve(__dirname, "public", "build")

var config = {
  context: __dirname,
  devtool: "eval-source-map",
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/dev-server",
    path.resolve(devPath, "dispenseApp/main.js")],
  output: {
    path: buildPath,
    filename: "bundle.js",
    publicPath: "/build/"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel",
      exclude: [nodeModulesPath]
    }, {
      test: /\.css$/,
      loader: "style!css"
    }]
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    //isue
    new Webpack.DefinePlugin({ "env.vars": JSON.stringify("http://localhost:8080/api/") })
  ]
}

module.exports = config
