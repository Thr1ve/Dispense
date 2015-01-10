var _ = require('underscore');
var app = require('../../server/server');

module.exports = function(Request) {

    // this is the logic for taking in a request, removing an access code,
    // and sending the code to both the client and the used code database

    Request.process= function(requestObject, cb){

        //intialize a few variables for later
        var newCode, newData;
        //get our productID from the request
        var productId = requestObject.productId;
        var response = requestObject;
        //grab the object representing the SQL data
        var availableCodes = app.datasources.mysqlDs.models.availableCodes;

        //search the SQL data for the correct model using the productId
        availableCodes.find({where:{productId: productId}}, function(err, cInstance){
            //Since we used the "find" function, we get an array of results
            //there isn't really a way we can get multiple results when searching
            //with the product ID, so just take the first array value
            var codes = cInstance[0].codes;

            //if we're not out of codes...
            if(codes.length >= 1){

                //take a code from the array of codes and store it in newCode
                newCode = cInstance[0].codes.shift();
                //store the remaining codes in newData
                newData = cInstance;
                //add our new code to our response
                response.code = newCode;
                //add the date
                var date = new Date().toLocaleDateString();
                response.date = date;

                //send the callback
                cb(null, response);
                //update the server with the new data
                availableCodes.updateAll({productId: productId},
                    {codes: newData[0].codes}, function(err, count){});
            }
            else {
                cb(null, 'There are no codes left!');
            }
        });
    };

    Request.beforeCreate = function(next, modelInstance) {
        Request.process(modelInstance, function(err, response){
            console.log(response);

        });
        next();
    };

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
