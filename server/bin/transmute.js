var loopback = require('loopback');
var fs = require('fs');

// //replace this with regcodes server details
// var dataSource = loopback.createDataSource('mssql', {
//  "host": "10.8.2.114",
//    // "host": "localhost",
//     "port": 1433,
//     "database": "RegCodes",
//     "password": "loopback",
//     "user": "loopback"
// });

// TODO:
//      - figure out how to map to productId
//      - function that writes to bigass json file
//      - option to tie into boot script

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

var dataSource = loopback.createDataSource('mssql', {
    "host": "localhost",
    "port": 1433,
    "database": "testing",
    "password": "test",
    "user": "test"
});


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
    },

    andBuild : function(model){

        if(this.ifUsedCodes(model.tableName)){
            build.usedCodes(model)
        }
        else if(this.ifRegCodes(model.tableName)){
            build.regCodes(model)
        }
        else{
            return
        }
    }
}


var build = {

    regCodes : function(model){
        dataSource.connector.query( model.query, function(err, data){
            if(err) console.log(err)

            console.log(model.productId);
            console.log('RegCodes', data)

        })
    },

    usedCodes : function(model){
        dataSource.connector.query( model.query, function(err, data){
            if(err) console.log(err)

            console.log('UsedCodes', data)
        })
    }
}
 
  
dataSource.discoverModelDefinitions(function(err, models){

    var products = models.reduce(function(prev, val, ind, arr){
        if(check.ifRegCodes(val.name)){

            var productId = prev.length

            //we should trim the _Regcodes off the string here

            prev.push({
                productId: productId,
                title: val.name
            })

            return prev;
        }
    }, [])

    console.log(products);

    // models.forEach(function (model, productId) {

 //        var query = 'select * from ' + model.name;

 //        var model = {
 //            tableName: model.name,
 //            productId: productId,
 //            query: query
 //        }

 //        check.andBuild(model)
 //    });

    dataSource.disconnect();

});

