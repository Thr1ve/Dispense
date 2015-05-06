var app = require('../../server/server');


module.exports = function(AvailableCodes) {

    //this is the logic for accepting a request to add codes from the client and
    //adding the new codes to the database

    AvailableCodes.add = function(productId, codes, cb) {

        //grab the object representing the SQL data
        var availableCodes = app.datasources.mysqlDs.models.availableCodes;
        var product= app.datasources.mysqlDs.models.product;

        codes.forEach(function(val){
                availableCodes.create({
                    productId: productId,
                    code: val
                }, function(err){
                    if(err) throw err;
                });
        });
        cb(null, {productId: productId, codes: codes});
    };

    //this registers the above "add" function as a remote array of our model and
    //makes it available via URL in our API
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
