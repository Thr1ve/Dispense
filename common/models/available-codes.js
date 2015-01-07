var app = require('../../server/server');


module.exports = function(AvailableCodes) {

    //this is the logic for accepting a request to add codes from the client and
    //adding the new codes to the database

    AvailableCodes.add = function(productId, codes, cb) {

        //grab the object representing the SQL data
        var availableCodes = app.datasources.mysqlDs.models.availableCodes;

        //find the right product by searching productID
        availableCodes.find({where:{productId: productId}}, function(err, cInstance){
            //cInstance = returned array of available codes in the database

            //concat our new codes to the codes we currently have
            cInstance[0].codes = cInstance[0].codes.concat(codes);

            var newCodes = cInstance;

            //send the callback
            cb(null, newCodes[0].productId, newCodes[0].codes);

            //update SQL with our new array of codes
            availableCodes.updateAll({productId: productId},
                {codes: newCodes[0].codes}, function(err, count){});
        });



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
