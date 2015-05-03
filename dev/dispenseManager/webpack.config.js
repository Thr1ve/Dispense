// make it possible to require es6 modules
require('babel/register')
var webpackConfig = require('hjs-webpack')
var env = process.env.NODE_ENV || 'development'
var React = require('react')

module.exports = webpackConfig({
  in: 'src/app.js',
  out: '../../client/dispenseManager/',
  isDev: env !== 'production',
  replace: {
    config: 'src/config.js'
  }
})

