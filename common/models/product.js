var app = require('../../server/server');


module.exports = function(Product) {


    Product.beforeValidate = function(next, modelInstance) {

        var products = app.datasources.mysqlDs.models.product;
        var availableCodes = app.datasources.mysqlDs.models.availableCodes;
        
        var self = this;

        if(!this.productId){
            products.count(function(err,n){
                self.productId = n+1;
                newModel = {};
                newModel.productId = self.productId;
                newModel.codes = [];
                availableCodes.create(newModel);   
                next();
            });
        }
        else{
            next();
        }

    };
};


