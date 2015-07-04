var productsJSON           = require('../testData/products.json');
var contactsJSON           = require('../testData/contacts.json');
var testUsedCodesJSON      = require('../testData/testUsedCodes.json');
var testAvailableCodesJSON = require('../testData/testAvailableCodes.json');

var _ = require('underscore');

module.exports = function(app) {
    app.dataSources.mydb.automigrate('product', function(err) {
        if (err) throw err;

        productsJSON.products.forEach(function(val) {
            app.models.product.create([{
                productId: val.id,
                title: val.title,
                isbn13: val.isbn13,
                config: val.config,
                popularity: val.popularity
            }, ], function(err, products) {
                if (err) throw err;
            });
        });
        console.log('Product Models created!');
    });

    app.dataSources.mydb.automigrate('contact', function(err) {
        if (err) throw err;

        var date = new Date(0);

        contactsJSON.contacts.forEach(function(val) {
            app.models.contact.create([{
                productId: val.productId,
                mainEmail: val.mainEmail,
                cc       : val.cc,
                lastEmailed : date
            }, ], function(err, products) {
                if (err) throw err;
            });
        });
        console.log('Contact Models created!');
    });

    app.dataSources.mydb.automigrate('availableCodes', function(err) {
        if (!err) {
            testAvailableCodesJSON.availableCodes.forEach(function(val) {
                app.models.availableCodes.create([{
                    productId: val.productId,
                    code: val.code
                }], function(err, products) {
                    if (err) throw err;
                });
            });
            console.log('Sample Codes created!');
        }
    });

    app.dataSources.mydb.automigrate('usedCode', function(err) {
        if (!err) {
            testUsedCodesJSON.usedCodes.forEach(function(val) {
                var fixedDate = new Date(val.date).toDateString();
                app.models.usedCode.create([{
                    productId: val.productId,
                    chatOrTicket: val.chatOrTicket,
                    customerEmail: val.customerEmail,
                    customerName: val.customerName,
                    representative: val.representative,
                    universityOrBusiness: val.universityOrBusiness,
                    code: val.code,
                    date: fixedDate
                }], function(err, products) {
                    if (err) throw err;
                });
            });
            console.log('usedCode table created');
        }
    });


};



/*
// template for random JSON generation at
// http://www.json-generator.com/

[
  '{{repeat(500)}}',
  {
    chatOrTicket: 'chat',
    customerName: '{{firstName()}} {{surname()}}',
    customerEmail: '{{email()}}',
    productId: '{{integer(1, 272)}}',
    representative: '{{random("Gordon B", "Chrys C", "JR", "Sarah Z", "Rhetlin F")}}',
    universityOrBusiness: '{{company().toUpperCase()}}',
    code: '{{objectId()}}',
    date: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}'
  }
]




*/
