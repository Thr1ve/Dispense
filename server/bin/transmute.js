var loopback = require('loopback');

//replace this with regcodes server details
var dataSource = loopback.createDataSource('mssql', {
	"host": "10.8.2.114",
    // "host": "localhost",
    "port": 1433,
    "database": "RegCodes",
    "password": "loopback",
    "user": "loopback"
});

dataSource.discoverModelDefinitions(function(err, models){
	// console.log(models);
	// models.forEach(function (def) {
    // def.name ~ the model name
    // console.log(def.name);
    dataSource.discoverAndBuildModels('ContemporaryBusiness2012Update14e_9781118010303_UsedCodes' , {owner:'dbo'}, function(err, nModels){
        if(err) {
            console.log(err)
        }
        // console.log(nModels);
        nModels.Contemporarybusiness2012update14e9781118010303Usedcodes.find(function(err, model){
            console.log(model);
        })
        // console.log(nModels.Contemporarybusiness2012update14e9781118010303Usedcodes.find.toString());
    })
    // dataSource.discoverSchema(def.name, null, function (err, schema) {
    //   console.log(schema);
    // });
    // });
    // dataSource.disconnect();
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