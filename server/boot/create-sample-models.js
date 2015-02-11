var productsJSON = require('../products.json');
var _ = require('underscore');

module.exports = function(app) {
    app.dataSources.db.automigrate('product', function(err) {
        if (err) throw err;

        productsJSON.products.forEach(function(val){
            app.models.product.create([
                {
                    productId: val.id,
                    title: val.title,
                    isbn13: val.isbn13,
                    config: val.config
                },
            ], function(err, products) {
              if (err) throw err;
            });
        });
        console.log('Product Models created!');


    });

    app.dataSources.db.automigrate('availableCodes', function(err) {
        if(!err) {

            productsJSON.products.forEach(function(val){
                var newCodes = [];
                for(var i = 0; i < 25;i++){
                    var code = '' + i + 'XXX-XX-CODE-' + val.title + '';
                    newCodes.push(code);
                }
                app.models.availableCodes.create([
                    {
                        productId: val.id,
                        codes: newCodes
                    },
                ], function(err, availableCodes) {
                  if (err) throw err;
                });
            });
            console.log('Available Codes Models created!');
        }
    });

    app.dataSources.db.automigrate('request', function(err) {
        if(!err) {
            console.log('request table created');
        }
    });


};