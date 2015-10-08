'use strict'
let r = require('rethinkdb')

r.connect({
  host: 'localhost',
  port: 28015
}, function (err, conn) {
  if (err) {throw err}

  conn.use('dispense')

  r.tableList().run(conn)
    .then((list) => {
      list.forEach((val) => {
        r.tableDrop(val).run(conn)
          .then(() => {
            console.log(val + ' dropped')
          })
      })
    })
})
