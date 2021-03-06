#!/Usr/bin/env node

// isInteger polyfill
Number.isInteger = Number.isInteger || function (value) {
  return typeof value === 'number' &&
    isFinite(value) &&
    Math.floor(value) === value
}

var r = require('rethinkdb')

var loopback = require('loopback')
// var server = require('../server')
// var rethinkDb = server.dataSources.rethinkdb
// var postgresDb = server.dataSources.postgresql
var program = require('commander')

// var DispenseDB = rethinkDb

// replace this with regcodes server details for production
// var OldDb = loopback.createDataSource('mssql', {
// })

/**
* utilities for other functions
*/
var utilities = {
  /**
  * Check if table is a product table with available codes
  *
  * @param {string} tableName The table name we are checking (will end in _RegCodes if has available codes)
  */
  ifRegCodes: function (tableName) {
    if (tableName.match(/.*(_RegCodes)/gi)) {
      return true
    } else {
      return false
    }
  },

  /**
  * Check if table is a product table with used codes
  *
  * @param {string} tableName The table name we are checking (will end in _UsedCodes if it has available codes)
  */
  ifUsedCodes: function (string) {
    if (string.match(/.*(_UsedCodes)/gi)) {
      return true
    } else {
      return false
    }
  },

  /**
  * Show the remaining codes for a product in the old database
  *
  * @param {object} product a product object
  */
  countCodes: function (product) {
    var oldTable = product.oldTable
    var countQuery = 'select COUNT(*) from ' + oldTable

    OldDb.connector.query(countQuery, function (err, data) {
      if (err) {console.log(err)}
      // data[0][''] is the number codes we have total
      var remainingCodes = data[0]['']
      console.log(oldTable + ' has ' + remainingCodes + ' codes left')
    })
  },

  /**
   * Needs to be slightly refactored...it will find available codes for a given product and, by default, move 10% of them to the new database
   @param {object} product a product object as produced by products function
   @param {number} nCodes the specific name of the table for the product in the old database
   @param {boolean} all whether or not to pull all the codes
   */
  moveCodes: function (product, nCodes, all, conn) {
    var oldTable = product.oldTable
    var selectQuery = 'select * from ' + oldTable
    var countQuery = 'select COUNT(*) from ' + oldTable

    var nAll = all ? true : false
    var n = nAll ? nAll : nCodes


    OldDb.connector.query(countQuery, function (err, data) {
      if (err) {console.log(err)}
      // data[0][''] is the number codes we have total
      // we added the && to be sure data exists first since they've apparently made changes to a few of the names in the old DB
      var remainingCodes = data && data[0]['']
      var toTake
      if (nAll) {
        // if all is true, take all the codes
        toTake = remainingCodes
      } else if (Number.isInteger(n)) {
        // if we asked for more codes than are available, just give us the remaining codes
        toTake = n > remainingCodes ? remainingCodes : n
      } else {
        // if we didn't specify anything, then give us 10% or just 100 if there's more than 1000 codes available
        toTake = remainingCodes > 1000 ? 100 : Math.round(remainingCodes * 0.1)
      }
      OldDb.connector.query(selectQuery, function (err2, data2) {
        if (err2) {console.log(err2)}
        // make sure there are actually codes
        var data2 = data2 || ''
        if (data2.length > 0) {
          // take a chunk of codes
          var sliced = data2.slice(0, toTake)
          var mapped = sliced.map((code) => {
            return {
              productId: product.productId,
              code: code.regcodes
            }
          })
          sliced.forEach(function (code) {
            // make sure regcodes isn"t blank...
            if (code.regcodes.length > 0) {
              var deleteQuery = "DELETE FROM " + oldTable + " WHERE regcodes='" + code.regcodes + "'"
              // delete the codes we took
              OldDb.connector.query(deleteQuery, function (err3, data3) {
                if (err3) {console.log('error', err3)}
              })
            //   r.table('test').insert({
            //     productId: product.productId,
            //     code: code.regcodes
            //   }).run(conn)
            }
          })
          r.table('availableCodes').insert(mapped).run(conn)
        }

      })
    })
  },

/**
 * This will, given a product, find all used codes for that product in the old db, then copy them to the new database
 * @param {Object} product
 */
  copyUsedCodes: function (product) {
    var query = 'select * from ' + product.title + '_UsedCodes'
    OldDb.connector.query(query, function (error, data) {
      if (error) {console.log(error)}
      data.forEach(function (val) {
        var fixedDate = new Date(val.TimeStamp).toDateString()
        var checkedCode = val.RegCode || 'none'
        DispenseDB.models.usedCode.create([{
          productId: product.id,
          chatOrTicket: val.TicketNumber,
          customerEmail: val.StudentEmail,
          customerName: val.StudentName,
          representative: val.TechName,
          universityOrBusiness: val.UnivName,
          code: checkedCode,
          date: fixedDate
        }], function (err2) {
          if (err2) {throw err2}
        })
      })
    })
  },

  /**
   * This pulls product id, title, oldTableName, and isbn13 from an array of products from the old database
   *
   * @return {Array} an array of product objects
   *
   * ```
   * [
   *  {
   *    productId: [number],
   *    title: [string],
   *    oldTable: [string],
   *    isbn13: [string]
   *  },
   *  {
   *    productId: [number],
   *    title: [string],
   *    oldTable: [string],
   *    isbn13: [string]
   *  },
   *   ...
   * ]
   * ```
   */
  getProducts: function (models) {
    // NOTE: This sort is NOT reliable. You will get slightly different results each time; this sort is ONLY used to give some semblance of alphabetical order
    // TODO: make this give back isbn13 as well
    var self = this
    var productsCollection = models.sort(function (a, b) {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    })
    .reduce(function (prev, val) {
      if (self.ifRegCodes(val.name)) {
        var id = prev.length + 1
        var title = val.name.replace(/(_RegCodes)/gi, '')
        prev.push({
          id: id,
          title: title,
          oldTable: val.name
        })
        return prev
      } else {
        return prev
      }
    }, [])

    return productsCollection
  }
}

/**
 * This will pull all products from the old database, then create them in the new database
 *
 * #### ***WARNING***: As there does not seem to be a way to sort reliably ( nor would it be worthwhile to do so as we will not be re-arranging product ids when they are in the new database ), the order or the products in the array WILL change when this function is called. If there are already products and available codes in the database, this will tie many codes to incorrect products.
 */
function initProducts () {
  // WARNING: this will reset products. They will not be in the same order. ONLY use this to initialize
  OldDb.discoverModelDefinitions(function (error, models) {
    if (error) {console.log(error)}
    var products = utilities.getProducts(models)
    DispenseDB.automigrate('product', function (err) {
      if (err) {throw err}
      products.forEach(function (val) {
        DispenseDB.models.product.create([{
          productId: val.id,
          title: val.title,
          oldTable: val.oldTable
        }], function (err2) {
          if (err2) {throw err2}
        })
      })
      console.log('Creating Product Models...')
    })
  })
}

/**
 * Pull available codes from old database. Can optionally overwrite existing codes in new database with those pulled from old database
 * @param {bool} overWrite whether or not to overwrite existing codes
 */
function pullAvailableCodes (overWrite, nCodes, all) {
  overWrite = overWrite || false
  nCodes = false
  all = false

  r.connect({
    host: '10.200.32.122',
    port: 28015
  }, function (err, conn) {
    if (err) {throw err}

    conn.use('dispense')

    if (!overWrite) {
      r.table('products').run(conn)
        .then((products) => {
          products.each((err, product) => {
            if (product.oldTable.length > 0) {
              utilities.moveCodes(product, nCodes, all, conn)
            }
          })
        })
    } else {
      // DispenseDB.models.product.find(function (err, products) {
      //   if (err) {console.log(err)}
      //   DispenseDB.automigrate('availableCodes', function (err2) {
      //     if (!err2) {
      //       products.forEach(function (product) {
      //         utilities.moveCodes(product, nCodes, all)
      //       })
      //       console.log('Pillaging Old Available Codes...')
      //     }
      //   })
      // })
    }
  })
}

/**
* This will remove the existing used codes and get them all again
*/
function pullUsedCodes () {
  DispenseDB.models.product.find(function (err, products) {
    if (err) {console.log(err)}
    DispenseDB.automigrate('usedCode', function (err2) {
      if (!err2) {
        products.forEach(function (product) {
          utilities.copyUsedCodes(product)
        })
        console.log('Cloning Used Codes...')
      }
    })
  })
}

function dropAll () {
  DispenseDB.automigrate('availableCodes', function (err) {
    if (err) { console.log(err)}
    console.log('availableCodes wiped...')
  })
  DispenseDB.automigrate('product', function (err) {
    if (err) { console.log(err)}
    console.log('products wiped...')
  })
  DispenseDB.automigrate('contact', function (err) {
    if (err) { console.log(err)}
    console.log('contacts wiped...')
  })
  DispenseDB.automigrate('usedCode', function (err) {
    if (err) { console.log(err)}
    console.log('usedCodes wiped...')
  })
}

function resetContacts () {
  DispenseDB.automigrate('contact', function (err) {
    if (err) {throw err}
    var date = new Date(0)
    DispenseDB.models.product.find(function (err, products) {
      if (err) {console.log(err)}
      products.forEach(function (product) {
        DispenseDB.models.contact.create([{
          productId: product.productId,
          mainEmail: 'test@test.com',
          cc: '',
          lastEmailed: date
        }], function (err2) {
          if (err2) {throw err2}
        })
      })
    })
    console.log('Contact Models created!')
  })
}

program
  .command('count')
  .description('Show the remaining codes for each product')
  .action(function () {
    DispenseDB.models.product.find(function (err, products) {
      if (err) {console.log(err)}
      products.forEach(function (product) {
        utilities.countCodes(product)
      })
    })
  })

program
  .command('resetContacts')
  .description('Reset/create the contacts for all products')
  .action(function () {
    resetContacts()
  })

program
  .command('dropAll')
  .description('Wipe usedCodes, availableCodes, and products')
  .action(function () {
    dropAll()
  })

program
  .command('initProducts')
  .description('Get products from OldDb tables - WARNING: this will drop and reset tables. Products will be ordered differently. This means codes will be tied to incorrect products if they already exist. Good luck sorting things out if you use this incorrectly...')
  .action(function () {
    initProducts()
  })

program
  .command('pullAvailableCodes')
  .option('-o, --overwrite', 'overwrites existing codes')
  .description('Pull available codes from old database. Defaults to pull 10% of codes from each product')
  .action(function (options) {
    // TODO: add options for nCodes and all
    if (options.overwrite) {
      console.log('I sure hope there werent any codes in there...I wouldnt want their families to start hunting you down...')
      pullAvailableCodes(true)
    } else {
      console.log('Thank you for not deleting my codes.')
      pullAvailableCodes(false)
    }
  })

program
  .command('pullUsedCodes')
  .description('Pull all used codes from old site')
  .action(function () {
    pullUsedCodes()
  })

program
  .command('transfer')
  .description('transfer data from postgresDb to empty rethinkDb database')
  .action(function () {
    r.connect({
      host: '10.200.32.122',
      port: 28015
    }, function (err, conn) {
      if (err) {throw err}

      conn.use('dispense')

      postgresDb.models.product.find()
        .then(function (products) {
          var formatted = products.map((product) => {
            return {
              title: product.title,
              isbn13: product.isbn13 || '',
              productId: product.productId,
              nCodes: 0,
              popularity: product.popularity || 0,
              oldTable: product.oldTable || ''
            }
          })
          r.tableCreate('products').run(conn)
            .then(() => {
              r.table('products').insert(formatted).run(conn)
            }, (err) => {
              console.log(err)
            })
            .then(() => {
              console.log('created Products!')
            })
        })
        .catch(function (err) {
          console.log(err)
        })

      postgresDb.models.contact.find()
        .then(function (contacts) {
          var formatted = contacts.map((contact) => {
            return {
              productId: contact.productId,
              mainEmail: contact.mainEmail || '',
              cc: contact.cc || '',
              lastEmailed: contact.lastEmailed || ''
            }
          })
          r.tableCreate('contacts').run(conn)
            .then(() => {
              r.table('contacts').insert(formatted).run(conn)
            }, (err) => {
              console.log(err)
            })
            .then(() => {
              console.log('created Contacts!')
            })
        })
        .catch(function (err) {
          console.log(err)
        })

      postgresDb.models.availableCodes.find()
        .then(function (codes) {
          var formatted = codes.map((code) => {
            return {
              code: code.code,
              productId: code.productId
            }
          })
          r.tableCreate('availableCodes').run(conn)
            .then(() => {
              r.table('availableCodes').insert(formatted).run(conn)
            }, (err) => {
              console.log(err)
            })
            .then(() => {
              console.log('created AvailableCodes!')
            })
        })
        .catch(function (err) {
          console.log(err)
        })

      postgresDb.models.usedCode.find()
        .then(function (usedCodes) {
          var formatted = usedCodes.map((code) => {
            return {
              chatOrTicket: code.chatOrTicket || '',
              customerEmail: code.customerEmail || '',
              customerName: code.customerName || '',
              productId: code.productId,
              representative: code.representative || '',
              universityOrBusiness: code.universityOrBusiness || '',
              code: code.code || '',
              date: code.date || '',
            }
          })
          r.tableCreate('usedCodes').run(conn)
            .then(() => {
              r.table('usedCodes').insert(formatted).run(conn)
            }, (err) => {
              console.log(err)
            })
            .then(() => {
              console.log('created UsedCodes!')
            })
        })
        .catch(function (err) {
          console.log(err)
        })

    })
  })

    // OldDb.disconnect()
program.parse(process.argv)
