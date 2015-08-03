console.log('CORRECT')

var express = require('express')
var path = require('path')
var httpProxy = require('http-proxy')
var http = require('http')

var app = express()
var proxy = httpProxy.createProxyServer({
  changeOrigin: true,
  ws: true
})

var isProduction = process.env.NODE_ENV === 'production'
var port = isProduction ? process.env.PORT : 3000
// var publicPath = path.resolve(__dirname, 'public')
var apps = path.resolve(__dirname, 'apps')
var dispenseApp = path.resolve(__dirname, 'apps/dispenseApp/index.html')
var dispenseManager = path.resolve(__dirname, 'apps/dispenseManager/index.html')

app.use(express.static(apps))

app.get('/dispenseApp*', function (req, res) {
  res.sendFile(dispenseApp)
})

app.get('/dispenseManager*', function (req, res) {
  res.sendFile(dispenseManager)
})
// app.all('/db/*', function (req, res) {
//   proxy.web(req, res, {
//     target: 'https://glowing-carpet-4534.firebaseio.com/'
//   })
// })

if (!isProduction) {

  var bundle = require('./server/bundle.js')
  bundle()
  app.all('/api/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://192.168.1.85/api/'
    })
  })
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://127.0.0.1:3001'
    })
  })
  app.all('/socket.io*', function (req, res) {
    proxy.web(req, res, {
      target: 'http://127.0.0.1:3001'
    })
  })

  proxy.on('error', function (e) {
    console.log(e)
    // Just catch it
  })

  // We need to use basic HTTP service to proxy
  // websocket requests from webpack
  var server = http.createServer(app)

  server.on('upgrade', function (req, socket, head) {
    proxy.ws(req, socket, head)
  })

  server.listen(port, function () {
    console.log('Server running on port ' + port)
  })

} else {

  // And run the server
  app.listen(port, function () {
    console.log('Server running on port ' + port)
  })

}
