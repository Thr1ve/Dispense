var loopback = require("loopback")
var server = require("../server")
var testMigrated = server.dataSources.mydb

// console.log(process.argv[2]);
var overwrite = process.argv[2] === '--overwrite' ? true : false
// console.log('overwrite:', overwrite)

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
  regCodes: function(product){
    var table = product.title + "_RegCodes"
    var query = "select * from " + table
    var count = "select COUNT(*) from " + table

    dataSource.connector.query( count, function(err, data){
      if(err) {console.log(err)}
      // data[0][''] is the number codes we have total
      var count = data[0]['']
      // take 10%, but don't take more than 100
      var toTake = count > 1000 ? 100 : Math.round(count * .1)

      dataSource.connector.query(query, function(err2, data2){
        if(err2) {console.log(err2)}
        // make sure there are actually codes
        if(data2.length > 0){
          // take a chunk of codes
          var sliced = data2.slice(0, toTake)
          sliced.forEach(function(code){
            // make sure regcodes isn't blank...
            if(code.regcodes.length > 0){
              var deleteQuery = "DELETE FROM " + table + " WHERE regcodes='" + code.regcodes + "'"
              // uncomment below when ready to actually delete codes
              // delete the codes we took
              // dataSource.connector.query(deleteQuery, function(err3, data3){
              //   if(err3) {console.log("error", err3);}
              // })
              testMigrated.models.availableCodes.create([
                {
                  productId: product.id,
                  code: code.regcodes
                }
                ], function(err2) {
                  if (err2) {console.log(product, err2)}
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
        testMigrated.models.usedCode.create([{
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
    // NOTE: This sort is NOT reliable. You will get slightly different results each time
    var productsCollection = models.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0
    })
    .reduce(function(prev, val){
      if(check.ifRegCodes(val.name)){
        var id = prev.length
        var title = val.name.replace(/(_RegCodes)/gi, "")
        prev.push({
          id: id,
          title: title
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

dataSource.discoverModelDefinitions(function(error, models){
  if(error){console.log(error)}
  var products = build.products(models)
  testMigrated.automigrate("product", function(err) {
    if (err) {throw err}
    products.forEach(function(val) {
      testMigrated.models.product.create([{
        productId: val.id,
        title: val.title
      }], function(err2) {
        if (err2) {throw err2}
      })
    })
    console.log("Product Models created!")
  })

  testMigrated.automigrate("availableCodes", function(err) {
    if (!err) {
      products.forEach( function (product){
        build.regCodes(product)
      })
      console.log("Available Codes cloned")
    }
  })

  testMigrated.automigrate("usedCode", function(err) {
    if (!err) {
      products.forEach( function (product){
        build.usedCodes(product)
      })
      console.log("Used Codes cloned")
    }
  })

  // dataSource.disconnect()

})
