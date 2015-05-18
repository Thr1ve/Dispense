var loopback = require('loopback');

// //replace this with regcodes server details
// var dataSource = loopback.createDataSource('mssql', {
// 	"host": "10.8.2.114",
//    // "host": "localhost",
//     "port": 1433,
//     "database": "RegCodes",
//     "password": "loopback",
//     "user": "loopback"
// });

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

    andBuild : function(string, query){

        if(this.ifUsedCodes(string)){
            build.usedCodes(query)
        }

        else if(this.ifRegCodes(string)){
            build.regCodes(query)
        }

        else{
            return
        }
    }
}

var build = {
    regCodes : function(query){
        dataSource.connector.query( query , function(err, data){
            if(err) console.log(err)

            console.log('RegCodes', data)
        })
    },

    usedCodes : function(query){
        dataSource.connector.query( query , function(err, data){
            if(err) console.log(err)

            console.log('UsedCodes', data)
        })
    }
}
 
  
dataSource.discoverModelDefinitions(function(err, models){

	models.forEach(function (def) {

        var query = 'select * from ' + def.name;

        check.andBuild(def.name, query)

    });

    dataSource.disconnect();

});

