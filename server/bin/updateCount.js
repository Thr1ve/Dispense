
var dataSources = require('../datasources.json')
var db = dataSources.rethinkdb
var r = require('rethinkdb')

r.connect({
  host: db.host,
  port: db.port
}, function (err, conn) {
  if (err) {throw err}

  conn.use('dispense')

  r.table('availableCodes').group('productId').count().run(conn)
    .then(function (cursor) {
      cursor.each(function (err, row) {
        if (err) throw err
        var prodId = parseInt(row.group)
        r.table('product').filter({productId: prodId}).update({nCodes: row.reduction}).run(conn)
          .then(function (cursor2) {
            console.log('Changes for Product ID ' + row.group + ' :\n', cursor2)
          })
      })
    })

})
