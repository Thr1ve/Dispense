var app = require('../../server/server');


module.exports = function(Product) {


    Product.observe('before save', function(modelInstance, next) {

        var products = app.datasources.mydb.models.product;

        if(!modelInstance.instance.productId){
            products.count(function(err,n){
                modelInstance.instance.productId = n+1;
                next();
            });
        }
        else{
            next();
        }
    });
};


