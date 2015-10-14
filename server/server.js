'use strict'

var express = require('express')
var http = require('http')
var path = require('path')
var wsListen = require('rethinkdb-websocket-server').listen
var bodyParser = require('body-parser')

var r = require('rethinkdb')

var app = express()
var httpServer = http.createServer(app)

var apps = path.resolve(__dirname, '../apps')
var dispenseApp = path.resolve(__dirname, '../apps/dispenseApp')
var dispenseManager = path.resolve(__dirname, '../apps/dispenseManager')

app.use(bodyParser.json())
app.use(express.static(apps))

app.get('/dispenseApp*', function (req, res) {
  res.sendFile(dispenseApp + '/index.html')
})

app.get('/dispenseManager*', function (req, res) {
  res.sendFile(dispenseManager + '/index.html')
})

// allow CORS for development.
// http://enable-cors.org/server_expressjs.html
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   next()
// })

// Query to create usedCode / delete availableCode
app.post('/api/requestCode', function (req, res) {
  var request = req.body
  var date = new Date().toDateString()
  var productId = parseInt(req.body.productId, 10)

  r.connect({ host: 'localhost', port: 28015 }, function (err, conn) {
    if (err) {throw err}

    conn.use('dispense')

    r.table('availableCodes')
    // find the available codes for our specific product
    .filter({productId: productId})
    // pull a random one out
    .sample(1)
    // delete it, but return the changes so we can create a new usedCode with it.
    // the deleted code will be found at returned.changes[0].old_val
    .delete({returnChanges: true}).run(conn, function (err, returned) {
      if (err) {throw err}

      // If there was an available code for this product...
      if (returned.changes) {
        // decrement nCodes for this products by one since we just deleted a code
        r.table('products')
        .filter({productId: productId})
        .update({nCodes: r.row('nCodes').sub(1)}).run(conn, function (err) {
          if (err) {throw err}
        })

        // construct our new usedCode object
        var usedCode = {
          productId: productId,
          code: returned.changes[0].old_val.code,
          date: date,
          representative: request.representative,
          customerName: request.customerName,
          customerEmail: request.customerEmail,
          universityOrBusiness: request.universityOrBusiness,
          chatOrTicket: request.chatOrTicket
        }

        r.table('usedCodes')
        // insert our new usedCode into the database, returning the changes so we can send it to the client
        .insert(usedCode, {returnChanges: true}).run(conn, function (err, response) {
          if (err) {throw err}

          var newUsedCode = response.changes[0].new_val
          res.send(newUsedCode)
        })
      // if there were no codes left for this product...
      } else {
        res.send('No codes remaining for this product')
      }
    })
  })
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
httpServer.listen(80)
console.log('server started')
