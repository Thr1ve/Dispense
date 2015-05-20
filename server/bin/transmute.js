var loopback = require('loopback');
var fs = require('fs');

//replace this with regcodes server details
var dataSource = loopback.createDataSource('mssql', {
 //"host": "10.8.2.114",
    "host": "localhost",
    "port": 1433,
    "database": "RegCodes",
    "password": "loopback",
    "user": "loopback"
});
//move this to datasources as mydb ?
var testMigrated = loopback.createDataSource('mssql', {
 //"host": "10.8.2.114",
    "host": "localhost",
    "port": 1433,
    "database": "testMigrated",
    "password": "loopback",
    "user": "loopback"
});
testMigrated.ping(function(err, n){
    if(err) console.log('error',err)

    if(n) console.log(n)
})

// TODO:
//      - function that writes to bigass json file
//      - option to tie into boot script
//      - can we just have a standalone script that runs once and throws everything in the new database?

// // Output from home server test
// UsedCodes [ { regcodes: 'product2-code1' },
//   { regcodes: 'product2-code2' },
//   { regcodes: 'product2-code3' } ]
// UsedCodes [ { regcodes: 'product3-code1' },
//   { regcodes: 'product3-code2' },
//   { regcodes: 'product3-code3' } ]
// UsedCodes [ { regcodes: 'product1-code1' },
//   { regcodes: 'product1-code2' },
//   { regcodes: 'product1-code3' } ]
// RegCodes [ { regcodes: 'product2-code1' },
//   { regcodes: 'product2-code2' },
//   { regcodes: 'product2-code3' } ]
// RegCodes [ { regcodes: 'product3-code1' },
//   { regcodes: 'product3-code2' },
//   { regcodes: 'product3-code3' } ]
// RegCodes [ { regcodes: 'product1-code1' },
//   { regcodes: 'product1-code2' },
//   { regcodes: 'product1-code3' } ]

/*
var dataSource = loopback.createDataSource('mssql', {
    "host": "localhost",
    "port": 1433,
    "database": "testing",
    "password": "test",
    "user": "test"
});
*/

var check = {

    ifRegCodes : function(string){
        if(string.match(/.*(_RegCodes)/gi)){
            return true
        }
        else{
            return false
        }
    },

    ifUsedCodes : function (string){
        if(string.match(/.*(_UsedCodes)/gi)){
            return true
        }
        else{
            return false
        }
    }
}

var stats = {

    checkAmount : function(n, str){
        if(n > 2500){
            console.log(n, str);
        }
    }
}

var build = {

    regCodes : function(product){
        var query = 'select * from ' + product.title + '_RegCodes'

        dataSource.connector.query( query, function(err, data){
            if(err) console.log(err)

            var code = data.regcodes
            var productId = product.productId
            stats.checkAmount(data.length, 'AvailableCodes')
            //console.log('Product: ' + product.title + '\n     has ' + data.length + ' Available Codes')

        })
    },

    usedCodes : function(product){
        var query = 'select * from ' + product.title + '_UsedCodes'

        dataSource.connector.query( query, function(err, data){
            if(err) console.log(err)

            stats.checkAmount(data.length, 'UsedCodes')
            //console.log('Product: ' + product.title + '\n     has ' + data.length + ' Used Codes')
        })
    },

    products : function(models){
        return productsCollection = models.reduce(function(prev, val, ind, arr){
            if(check.ifRegCodes(val.name)){
                var productId = prev.length;
                //maybe grab isbn from the title as well?
                var title = val.name.replace(/(_RegCodes)/gi, '');
                //but don't remove...we can use the names here to format queries
                prev.push({
                    productId: productId,
                    title: title
                })
                return prev;
            }
            else{
                return prev
            }
        }, [])
    }
}
 
  
dataSource.discoverModelDefinitions(function(err, models){

    var products = build.products(models)

    products.forEach( function (product){
        build.usedCodes(product)
        build.regCodes(product)
    })

    dataSource.disconnect();

});

