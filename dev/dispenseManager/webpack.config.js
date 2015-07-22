// make it possible to require es6 modules
require('babel/register')
var webpackConfig = require('hjs-webpack')
var env = process.env.NODE_ENV || 'development'
var location = process.env.LOCATION || 'web'

var environmentVariables = require('../env.js')

module.exports = webpackConfig({
  in: 'src/app.js',
  out: '../../client/dispenseManager/',
  isDev: env !== 'production',
  env: environmentVariables[location],
  replace: {
    config: 'src/config.js'
  }
})
