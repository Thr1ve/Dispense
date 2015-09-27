'use strict'

let contacts = require('../testData/contacts.json')
let products = require('../testData/products.json')
let testAvailableCodes = require('../testData/testAvailableCodes.json')
let testUsedCodes = require('../testData/testUsedCodes.json')

let r = require('rethinkdb')

r.connect({
  host: 'localhost',
  port: 28015
}, function (err, conn) {
  if (err) {throw err}

  conn.use('dispense')

  r.tableCreate('availableCodes').run(conn)
    .then(() => {
      r.table('availableCodes').insert(testAvailableCodes).run(conn)
    }, (err) => {
      console.log(err)
    })
    .then(() => {
      console.log('created AvailableCodes!')
    })

  r.tableCreate('usedCodes').run(conn)
    .then(() => {
      r.table('usedCodes').insert(testUsedCodes).run(conn)
    }, (err) => {
      console.log(err)
    })
    .then(() => {
      console.log('created UsedCodes!')
    })

  r.tableCreate('products').run(conn)
    .then(() => {
      r.table('products').insert(products).run(conn)
    }, (err) => {
      console.log(err)
    })
    .then(() => {
      console.log('created Products!')
    })

  r.tableCreate('contacts').run(conn)
    .then(() => {
      r.table('contacts').insert(contacts).run(conn)
    }, (err) => {
      console.log(err)
    })
    .then(() => {
      console.log('created Contacts!')
    })
})
