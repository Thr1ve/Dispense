var _ = require('underscore');
var app = require('../../server/server');

module.exports = function(Request) {

    // this is the logic for taking in a request, removing an access code,
    // and sending the code to both the client and the used code table 

    Request.process= function(requestObject, cb){

        var response = requestObject.instance;
        //grab the object representing the SQL data
        var availableCodes = app.datasources.mydb.models.availableCodes;

        //search the SQL data for the correct model using the productId
        //maybe move thise to the before save function below?? that way we can avoid 
        //writing to the db if there's no codes
        availableCodes.findOne({where:{productId: requestObject.instance.productId}}, function(err, row){
            if(err){
                console.log(err);
            }
            if(row){
                //add our new code to our response
                response.code = row.code;
                //add the date
                var date = new Date().toLocaleDateString();
                response.date = date;
                //delete the row
                availableCodes.destroyById(row.id, function(err){
                    //send the callback
                    cb(null, response);
                });
            }
            else {
                cb(true, null);
            }
        });
    };

    Request.observe('before save',function(modelInstance, next) {

        Request.process(modelInstance, function(err, res){
            modelInstance = res;
            next();
        });

    });

    //register our "process" function as a remote method
    //available via our web api
    Request.remoteMethod(
        'process',
        {
          accepts: {arg: 'requestObject', type: 'Object'},
          returns: {arg: 'receivedCode', type: 'Object'}
        }
    );

};
