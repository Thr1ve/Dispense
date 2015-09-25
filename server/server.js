'use strict'

let express = require('express')
var http = require('http')
var path = require('path')
var wsListen = require('rethinkdb-websocket-server').listen

var app = express()
var httpServer = http.createServer(app)

var apps = path.resolve(__dirname, '../apps')
var dispenseApp = path.resolve(__dirname, '../apps/dispenseApp')
var dispenseManager = path.resolve(__dirname, '../apps/dispenseManager')

app.use(express.static(apps))

app.get('/dispenseApp*', function (req, res) {
  res.sendFile(dispenseApp + '/index.html')
})

app.get('/dispenseManager*', function (req, res) {
  res.sendFile(dispenseManager + '/index.html')
})

//
// ///////////////////////////////
// Configure rethinkdb-websocket-server to listen on the /db path
wsListen({
  httpServer: httpServer,
  httpPath: '/db',
  dbHost: 'localhost',
  dbPort: 28015,
  unsafelyAllowAnyQuery: true
})

// Start the HTTP server on the configured port
httpServer.listen(5000)
console.log('server started')
