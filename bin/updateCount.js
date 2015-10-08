'use strict'
let r = require('rethinkdb')

r.connect({
  host: 'localhost',
  port: 28015
}, function (err, conn) {
  if (err) {throw err}

  conn.use('dispense')

  r.table('availableCodes').group('productId').count().run(conn)
    .then(function (cursor) {
      cursor.each(function (err, row) {
        if (err) throw err
        let prodId = parseInt(row.group, 10)
        r.table('products').filter({productId: prodId}).update({nCodes: row.reduction}).run(conn)
          .then(function (cursor2) {
            console.log('Changes for Product ID ' + row.group + ' :\n', cursor2)
          })
      })
    })
})
