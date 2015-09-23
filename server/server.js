var loopback = require('loopback')
var boot = require('loopback-boot')
var path = require('path')
var app = module.exports = loopback()

var dataSources = require('./datasources.json')
var db = dataSources.rethinkdb
var r = require('rethinkdb')

boot(app, __dirname)

// ///////////////////////////////
// -- Mount static files here--
// All static middleware should be registered at the end, as all requests
// passing the static middleware are hitting the file system
// Example:
// app.use(loopback.static(path.resolve(__dirname, '../client')))
//
var apps = path.resolve(__dirname, '../apps')
var dispenseApp = path.resolve(__dirname, '../apps/dispenseApp')
var dispenseManager = path.resolve(__dirname, '../apps/dispenseManager')

app.use(loopback.static(apps))
app.use(createConnection)

app.get('/dispenseApp*', function (req, res) {
  res.sendFile(dispenseApp + '/index.html')
})

app.get('/dispenseManager*', function (req, res) {
  res.sendFile(dispenseManager + '/index.html')
})

//
// ///////////////////////////////

app.start = function () {
  return app.listen(function () {
    app.emit('started')
    console.log('Web server listening at: %s', app.get('url'))
  })
}

// start the server if `$ node server.js`
if (require.main === module) {
  app.io = require('socket.io')(app.start())

  app.io.on('connection', function (socket) {

    r.connect({
      host: 'localhost',
      port: 28015
    }, function (err, conn) {
      if (err) {throw err}

      conn.use('dispense')

      r.table('product').withFields('productId', 'nCodes').changes().run(conn)
        .then(function (cursor) {
          cursor.each(function (err, row) {
            if (err) {throw err}
            socket.emit('countUpdate', row)
          })
        })
    })

  })
}

function createConnection (req, res, next) {
  r.connect({
    host: 'localhost',
    port: 28015
  }, function (error, conn) {
    if (error) {
      handleError(res, error)
    } else {
      // Save the connection in `req`
      req._rdbConn = conn
      // Pass the current request to the next middleware
      next()
    }
  })
}

function handleError (res, error) {
  return res.send(500, {error: error.message})
}
