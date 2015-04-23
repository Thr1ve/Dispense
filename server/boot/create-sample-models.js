var productsJSON = require('../products.json');
var contactsJSON = require('../contacts.json');
var _ = require('underscore');

module.exports = function(app) {
    app.dataSources.mydb.automigrate('product', function(err) {
        if (err) throw err;

        productsJSON.products.forEach(function(val) {
            app.models.product.create([{
                productId: val.id,
                title: val.title,
                isbn13: val.isbn13,
                config: val.config
            }, ], function(err, products) {
                if (err) throw err;
            });
        });
        console.log('Product Models created!');
    });

    app.dataSources.mydb.automigrate('contact', function(err) {
        if (err) throw err;

        contactsJSON.contacts.forEach(function(val) {
            app.models.contact.create([{
                productId: val.productId,
                mainEmail: val.mainEmail,
                cc       : val.cc
            }, ], function(err, products) {
                if (err) throw err;
            });
        });
        console.log('Contact Models created!');
    });

    app.dataSources.mydb.automigrate('availableCodes', function(err) {
        if (!err) {
            productsJSON.products.reduce(function(prev, cur, ind, arr) {
                var codesArray = [];
                for (var i = 0; i < 6; i++) {
                    codesArray.push({
                        productId: cur.id,
                        code: i + 'XXX-XX-CODE-' + cur.title
                    });
                }
                prev.push(codesArray);
                return prev;
            }, []).forEach(function(val){
                app.models.availableCodes.create([val], function(err, availableCodes) {
                  if (err) throw err;
                });
            });
            console.log('Sample Codes created!');
        }
    });

    // app.dataSources.mydb.automigrate('usedCode', function(err) {
    //     if (!err) {
    //         console.log('usedCode table created');
    //     }
    // });


};