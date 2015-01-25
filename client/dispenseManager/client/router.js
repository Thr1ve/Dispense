/*global app*/
var Router = require('ampersand-router');

//pages
var HomePage = require('./pages/homeSearch');
var ProductStatusPage = require('./pages/productStatus');
var ModifyProductPage = require('./pages/addCodesPage');
var AddProductPage = require('./pages/addProduct');
var ProductPage = require('./pages/productPage');

var log = require('bows')("Router");

module.exports = Router.extend({

    routes: {

        'dispenseManager': 'home',
        'dispenseManager/productPage/:id': 'productPage',
        'dispenseManager/productStatus/:id': 'productStatus',
        'dispenseManager/modifyProduct/:id': 'modifyProduct',
        'dispenseManager/addProduct': 'addProduct',
        '(*path)': 'catchAll'

    },

    // ------- ROUTE HANDLERS ---------
    home: function() {

        //not sure if I want this here...this
        //resets displayed products on home page
        app.user.clear();

        this.trigger('page', new HomePage({

            model: app.user,
            collection: app.products

        }));
    },

    productPage : function(id){

        var findModel = app.products.get(id);

        this.trigger('page', new ProductPage({

            model: findModel,
            productId: id

        }));
    },

    productStatus: function(id) {

        var findModel = app.products.get(id);

        this.trigger('page', new ProductStatusPage({

            model: findModel,
            productId: id

        }));
    },

    modifyProduct : function(id) {

        var findModel = app.products.get(id);

        this.trigger('page', new ModifyProductPage({

            model: findModel,
            productId: id

        }));
    },

    addProduct : function() {

         this.trigger('page', new AddProductPage());

    },

    catchAll: function() {

        this.redirectTo('dispenseManager');

    }
});