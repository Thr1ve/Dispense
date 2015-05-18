var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

var dataSource = app.dataSources.mydb;

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