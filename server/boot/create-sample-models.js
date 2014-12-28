var productsJSON = require('../products.json');
var _ = require('underscore');

module.exports = function(app) {
    app.dataSources.mysqlDs.automigrate('product', function(err) {
        if (err) throw err;
        console.log('creating models');
        productsJSON.products.forEach(function(val){
            app.models.product.create([
                {
                    productId: val.id,
                    title: val.title,
                    isbn13: val.isbn13,
                    config: val.config,
                    codes: val.codes
                },
            ], function(err, products) {
              if (err) throw err;

              // console.log('Models created: \n', products);
            });
        });
        console.log('Models created!');
        app.dataSources.mysqlDs.automigrate('request', function(err) {
            if(!err) {
                console.log('request table created');
            }
        });

      });
};