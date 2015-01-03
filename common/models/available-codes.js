var app = require('../../server/server');

module.exports = function(AvailableCodes) {
    AvailableCodes.add = function(productId, codes, cb) {

        var availableCodes = app.datasources.mysqlDs.models.availableCodes;

        availableCodes.find({where:{productId: productId}}, function(err, cInstance){

            cInstance[0].codes = cInstance[0].codes.concat(codes);

            var newCodes = cInstance;

            cb(null, newCodes[0].productId, newCodes[0].codes);

            availableCodes.updateAll({productId: productId},
                {codes: newCodes[0].codes}, function(err, count){});
        });



    };

    // AvailableCodes.beforeUpdate = function(next, modelInstance){
    //     logger.log('Before Update...');
    //     AvailableCodes.add(modelInstance, function(err, response){});
    //     next();
    // };

    AvailableCodes.remoteMethod(
        'add',
        {
            accepts: [
                {arg: 'productId', type: 'string'},
                {arg: 'codes', type: 'array'},
            ],
            returns: [
                {arg: 'productId', type: 'string'},
                {arg: 'codes', type: 'array'},
            ],
            http: {path: '/addCodes' }
        }
    );

};
