var app = require('../../server/server');

module.exports = function(AvailableCodes) {
    AvailableCodes.add = function(requestObject, cb) {

        var availableCodes = app.datasources.mysqlDs.models.availableCodes;
        var productId = requestObject.productId;
        var response = requestObject;

        availableCodes.find({where:{productId: productId}}, function(err, cInstance){

            cInstance[0].codes = cInstance[0].codes.concat(response.codes);

            var newCodes = cInstance;

            availableCodes.updateAll({productId: productId},
                {codes: newCodes[0].codes, adding: false}, function(err, count){});
        });



    };
    AvailableCodes.beforeUpdate = function(next, modelInstance){
        if(modelInstance.adding){
            AvailableCodes.add(modelInstance, function(err, response){});
        }
        next();
    };

    AvailableCodes.remoteMethod(
        'add',
        {
            accepts: {arg: 'requestObject', type: 'Object'},
            returns: {arg: 'newCodes', type: 'Object'}
        }
    );

};
