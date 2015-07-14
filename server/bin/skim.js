// isInteger polyfill
Number.isInteger = Number.isInteger || function(value) {
    return typeof value === "number" &&
           isFinite(value) &&
           Math.floor(value) === value
}

var loopback = require("loopback")
var server = require("../server")
var DispenseDB = server.dataSources.mydb
var program = require("commander")

// add switch to overwite current data ?
// console.log(process.argv[2])
// var overwrite = process.argv[2] === "--overwrite" ? true : false
// console.log("overwrite:", overwrite)

// replace this with regcodes server details for production
var dataSource = loopback.createDataSource("mssql", {
 // "host": "10.8.2.114",
  "host": "localhost",
  "port": 1433,
  "database": "RegCodes",
  "password": "loopback",
  "user": "loopback"
})

var check = {
  ifRegCodes: function(string){
    if(string.match(/.*(_RegCodes)/gi)){
      return true
    }
    else{
      return false
    }
  },

  ifUsedCodes: function (string){
    if(string.match(/.*(_UsedCodes)/gi)){
      return true
    }
    else{
      return false
    }
  }
}

var build = {
  // this may be overkill...
  regCodes: function(product, oldTable, nCodes){
    var table = oldTable && !Number.isInteger(oldTable) ? oldTable : product.oldTable
    var selectQuery = "select * from " + table
    var countQuery = "select COUNT(*) from " + table
    dataSource.connector.query( countQuery, function(err, data){
      if(err) {console.log(err)}
      // data[0][""] is the number codes we have total
      var remainingCodes = data[0][""]
      var toTake
      if(!nCodes){
        toTake = Number.isInteger(oldTable) ?
          (oldTable > remainingCodes ? remainingCodes : oldTable) :
          (remainingCodes > 1000 ? 100 : Math.round(remainingCodes * .1))
      }
      else{
        toTake = Number.isInteger(nCodes) ?
          (nCodes > remainingCodes ? remainingCodes : nCodes ) :
          (remainingCodes > 1000 ? 100 : Math.round(remainingCodes * .1))
      }
      dataSource.connector.query(selectQuery, function(err2, data2){
        if(err2) {console.log(err2)}
        // make sure there are actually codes
        if(data2.length > 0){
          // take a chunk of codes
          var sliced = data2.slice(0, toTake)
          sliced.forEach(function(code){
            // make sure regcodes isn"t blank...
            if(code.regcodes.length > 0){
              // var deleteQuery = "DELETE FROM " + table + " WHERE regcodes="" + code.regcodes + """
              // uncomment below when ready to actually delete codes
              // delete the codes we took
              // dataSource.connector.query(deleteQuery, function(err3, data3){
              //   if(err3) {console.log("error", err3)}
              // })
              DispenseDB.models.availableCodes.create([
                {
                  productId: product.id,
                  code: code.regcodes
                }
                ], function(err3) {
                  if (err2) {console.log(product, err3)}
                }
              )
            }
          })
        }

      })
    })
  },

  usedCodes: function(product){
    var query = "select * from " + product.title + "_UsedCodes"
    dataSource.connector.query( query, function(error, data){
      if(error) {console.log(error)}
      data.forEach(function(val) {
        var fixedDate = new Date(val.TimeStamp).toDateString()
        DispenseDB.models.usedCode.create([{
          productId: product.id,
          chatOrTicket: val.TicketNumber,
          customerEmail: val.StudentEmail,
          customerName: val.StudentName,
          representative: val.TechName,
          universityOrBusiness: val.UnivName,
          code: val.RegCode,
          date: fixedDate
        }], function(err2) {
          if (err2) {throw err2}
        })
      })
    })
  },

  products: function(models){
    // NOTE: This sort is NOT reliable. You will get slightly different results each time; this is ONLY used to give some semblance of alphabetical order
    var productsCollection = models.sort(function (a, b) {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    })
    .reduce(function(prev, val){
      if(check.ifRegCodes(val.name)){
        var id = prev.length + 1
        var title = val.name.replace(/(_RegCodes)/gi, "")
        prev.push({
          id: id,
          title: title,
          oldTable: val.name
        })
        return prev
      }
      else{
        return prev
      }
    }, [])

    return productsCollection
  }
}

program
  .command("log")
  .description("log 'hello world' to console")
  .action(function(env, options){
    console.log("hello world")
  })

  .command("setProducts")
  .description("Get products from OldDB tables - WARNING: this will drop and reset tables. Products will be ordered differently.")
  .action(function(env, options){
    console.log("SHOULD NOT HAVE DONE THAT")
  })

  .command("run")
  .description("do all the things")
  .action(function(env, options){
    dataSource.discoverModelDefinitions(function(error, models){
      if(error){console.log(error)}
      var products = build.products(models)
      DispenseDB.automigrate("product", function(err) {
        if (err) {throw err}
        products.forEach(function(val) {
          DispenseDB.models.product.create([{
            productId: val.id,
            title: val.title,
            oldTable: val.oldTable
          }], function(err2) {
            if (err2) {throw err2}
          })
        })
        console.log("Creating Product Models...")
      })

      DispenseDB.automigrate("availableCodes", function(err) {
        if (!err) {
          products.forEach( function (product){
            build.regCodes(product)
          })
          console.log("Cloning Available Codes...")
        }
      })

      // DispenseDB.automigrate("usedCode", function(err) {
      //   if (!err) {
      //     products.forEach( function (product){
      //       build.usedCodes(product)
      //     })
      //     console.log("Cloning Used Codes...")
      //   }
      // })

      // dataSource.disconnect()

    })
  })



program.parse(process.argv)
