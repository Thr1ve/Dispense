var productsJSON        = require('../products.json');
var contactsJSON        = require('../contacts.json');
var sampleUsedCodesJSON = require('../sampleUsedCodes.json');

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

    app.dataSources.mydb.automigrate('usedCode', function(err) {
        if (!err) {
            sampleUsedCodesJSON.usedCodes.forEach(function(val) {
                app.models.usedCode.create([{
                    productId: val.productId,
                    chatOrTicket: val.chatOrTicket,
                    customerEmail: val.customerEmail,
                    customerName: val.customerName,
                    representative: val.representative,
                    universityOrBusiness: val.universityOrBusiness,
                    code: val.code,
                    date: val.date
                }, ], function(err, products) {
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