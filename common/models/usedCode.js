var _ = require('underscore');
var app = require('../../server/server');
var dsConfig = require('../../server/datasources.json');

//12 hours in milliseconds
// var EMAILINTERVAL = 43200000;

//10 seconds for testing
var EMAILINTERVAL = 10000;

module.exports = function(UsedCode) {

    // this is the logic for taking in a request, removing an access code,
    // and sending the code to both the client and the used code table 

    UsedCode.process= function(requestObject, cb){

        var yourEmailAddress = dsConfig.emailDs.transports[0].auth.user;

        var response = requestObject.instance;
        //grab the object representing the SQL data
        var availableCodes = app.datasources.mydb.models.availableCodes;
        var contacts = app.datasources.mydb.models.contact;
        
        var prodId = requestObject.instance.productId;
        //search the SQL data for the correct model using the productId
        //maybe move thise to the before save function below?? that way we can avoid 
        //writing to the db if there's no codes
        availableCodes.findOne({where:{productId: prodId}}, function(err, row){
            if(err){
                console.log(err);
            }
            if(row){
                //add our new code to our response
                response.code = row.code;
                //add the date
                var date = new Date().toDateString();
                response.date = date;
                //delete the row
                availableCodes.destroyById(row.id, function(err){
                    //send the callback
                    cb(null, response);
                });

                
                availableCodes.count({productId: prodId}, function(err, count){
                    if(err){ 
                        console.log(err);
                    }
                    else if(count < 5){
                        console.log('productId ' + prodId + ' has ' + count + ' codes left');
                        contacts.findOne({where:{productId: prodId}}, function(err, contact){

                            var now = Date.now();

                            if(err){
                                console.log(err);
                            } 
                            else if(now - contact.lastEmailed > EMAILINTERVAL) {
                                var updated = contact;
                                updated.lastEmailed = now;

                                // app.models.Email.send({
                                //     to: 'gbuhler@wiley.com',
                                //     cc: 'chrcollier@wiley.com;gbuhler@wiley.com',
                                //     from: yourEmailAddress,
                                //     subject: 'The email subject',
                                //     text: 'The following code was just generated in Dispense: \n\n' + response.code + '\n\n There are ' + count + ' codes left for this product',
                                //     //html: '<strong>HTML</strong> tags are converted'
                                // }, function(err) {
                                //     if (err) throw err;
                                //     console.log('> email sent successfully');
                                // });

                                contacts.upsert(updated, function(err, instance){
                                    console.log('updated', instance);
                                })
                            }
                            else{
                                console.log('Contact has already been emailed within 12 hours');
                            }
                        })
                    }
                });
            }
            else {
                cb(true, null);
            }
        });
    };

    // commented for testing usedCode searching -- uncomment when done
    
    UsedCode.observe('before save',function(modelInstance, next) {

        if(modelInstance.instance.code){
            next();
        }
        else{
            UsedCode.process(modelInstance, function(err, res){
                modelInstance = res;
                next();
            });
        }

    });

   

    //register our "process" function as a remote method
    //available via our web api
    // UsedCode.remoteMethod(
    //     'process',
    //     {
    //       accepts: {arg: 'requestObject', type: 'Object'},
    //       returns: {arg: 'receivedCode', type: 'Object'}
    //     }
    // );

};
