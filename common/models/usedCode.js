var _ = require('underscore');
var app = require('../../server/server');
var dsConfig = require('../../server/datasources.json');

module.exports = function(UsedCode) {

    // this is the logic for taking in a request, removing an access code,
    // and sending the code to both the client and the used code table 

    UsedCode.process= function(requestObject, cb){

        var yourEmailAddress = dsConfig.emailDs.transports[0].auth.user;

        var response = requestObject.instance;
        //grab the object representing the SQL data
        console.log(app.models()[0].count());
        var availableCodes = app.datasources.mydb.models.availableCodes;
availableCodes.count({where:{productId: "6"}}, function(err, count){
                    console.log(err);
                    console.log(count);
                });
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

                
                // app.models.Email.send({
                //     to: 'gbuhler@wiley.com',
                //     cc: 'chrcollier@wiley.com;gbuhler@wiley.com',
                //     from: yourEmailAddress,
                //     subject: 'The email subject',
                //     text: 'The following code was just generated in Dispense: \n\n' + response.code,
                //     //html: '<strong>HTML</strong> tags are converted'
                // }, function(err) {
                //     if (err) throw err;
                //     console.log('> email sent successfully');
                // });
            }
            else {
                cb(true, null);
            }
        });
    };

    UsedCode.observe('before save',function(modelInstance, next) {

        UsedCode.process(modelInstance, function(err, res){
            modelInstance = res;
            next();
        });

    });

    //register our "process" function as a remote method
    //available via our web api
    UsedCode.remoteMethod(
        'process',
        {
          accepts: {arg: 'requestObject', type: 'Object'},
          returns: {arg: 'receivedCode', type: 'Object'}
        }
    );

};
