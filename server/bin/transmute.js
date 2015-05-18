var loopback = require('loopback');

//replace this with regcodes server details
var dataSource = loopback.createDataSource('mssql', {
	"host": "localhost",
    "port": 1433,
    "database": "testing",
    "password": "test",
    "user": "test"
});

dataSource.discoverModelDefinitions(function(err, models){
	console.log(models);
	models.forEach(function (def) {
    // def.name ~ the model name
    dataSource.discoverSchema(def.name, null, function (err, schema) {
      console.log(schema);
    });
  });
});


// dataSource.discoverAndBuildModels('product2_UsedCodes', {owner: 'dbo'}, function (err, models) {
// 		console.log(models)
// 		models.Product2Usedcodes.findOne({}, function (err, inv) {
// 		    if(err) {
// 		      console.error(err);
// 		      return;
// 		    }
// 		   console.log(inv)
// 		});
//        dataSource.disconnect();
// });