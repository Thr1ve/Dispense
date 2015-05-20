var loopback     = require('loopback');
var server       = require('../server');
var testMigrated = server.dataSources.mydb;

//replace this with regcodes server details
var dataSource = loopback.createDataSource('mssql', {
 //"host": "10.8.2.114",
    "host": "localhost",
    "port": 1433,
    "database": "RegCodes",
    "password": "loopback",
    "user": "loopback"
});

// TODO:
//      - option to tie into boot script; only run with passed in flag ? we need some way to have it only run once
//      - can we just have a standalone script that runs once and throws everything in the new database?

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

var build = {

    regCodes : function(product){
        var query = 'select * from ' + product.title + '_RegCodes'
        dataSource.connector.query( query, function(err, data){
            if(err) console.log(err)
                data.forEach(function(val) {
                    if(val.regcodes){
                        testMigrated.models.availableCodes.create([{
                            productId: product.id,
                            code: val.regcodes
                        }], function(err, products) {
                            if (err) console.log(err);
                        });
                    }
                });
        })
    },

    usedCodes : function(product){
        var query = 'select * from ' + product.title + '_UsedCodes'
        dataSource.connector.query( query, function(err, data){
            if(err) console.log(err)
                console.log(data)

            // stats.checkAmount(data.length, 'UsedCodes')
            //console.log('Product: ' + product.title + '\n     has ' + data.length + ' Used Codes')
            // data.forEach(function(val) {
            //     var fixedDate = new Date(val.date).toDateString();
            //     app.models.usedCode.create([{
            //         productId: product.id,
            //         // chatOrTicket: val.chatOrTicket,
            //         // customerEmail: val.customerEmail,
            //         // customerName: val.customerName,
            //         // representative: val.representative,
            //         // universityOrBusiness: val.universityOrBusiness,
            //         // code: val.code,
            //         // date: fixedDate
            //     }], function(err, products) {
            //         if (err) throw err;
            //     });
            // });
        })
    },

    products : function(models){
        return productsCollection = models.reduce(function(prev, val, ind, arr){
            if(check.ifRegCodes(val.name)){
                var id = prev.length;
                //maybe grab isbn from the title as well?
                var title = val.name.replace(/(_RegCodes)/gi, '');
                //but don't remove...we can use the names here to format queries
                prev.push({
                    id: id,
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

    testMigrated.automigrate('product', function(err) {
        if (err) throw err;

        products.forEach(function(val) {
            testMigrated.models.product.create([{
                productId: val.id,
                title: val.title
            }, ], function(err, products) {
                if (err) throw err;
            });
        });
        console.log('Product Models created!');
    });

    testMigrated.automigrate('availableCodes', function(err) {
        if (!err) {
            products.forEach( function (product){

                // build.usedCodes(product)
                build.regCodes(product)
            })
            console.log('Available Codes cloned');
        }
    });

    testMigrated.automigrate('usedCode', function(err) {
        if (!err) {
            products.forEach( function (product){

                // build.usedCodes(product)
                build.regCodes(product)
            })
            console.log('Used Codes cloned');
        }
    });

    // dataSource.disconnect();

});

