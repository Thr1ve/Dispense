var _ = require('underscore');
var app = require('../../server/server');

module.exports = function(Request) {

    // this is the logic for taking in a request, removing an access code,
    // and sending the code to both the client and the used code database

    Request.process= function(requestObject, cb){

        var newCode, newData;
        var productId = requestObject.productId;
        var response = requestObject;
        var availableCodes = app.datasources.mysqlDs.models.availableCodes;

        availableCodes.find({where:{productId: productId}}, function(err, cInstance){
            var codes = cInstance[0].codes;

            if(codes.length >= 1){

                newCode = cInstance[0].codes.shift();
                newData = cInstance;
                response.code = newCode;

                cb(null, response);
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

    Request.remoteMethod(
        'process',
        {
          accepts: {arg: 'requestObject', type: 'Object'},
          returns: {arg: 'receivedCode', type: 'Object'}
        }
    );

};
