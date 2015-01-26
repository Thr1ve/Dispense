/*global app*/
var Router = require('ampersand-router');

//pages
var HomePage = require('./pages/homeSearch');
var ViewCodesPage = require('./pages/viewCodesPage');
var AddCodesPage = require('./pages/addCodesPage');
var AddProductPage = require('./pages/addProduct');
var ProductPage = require('./pages/productPage');
var EditProductPage = require('./pages/product-edit.js');

var log = require('bows')("Router");

module.exports = Router.extend({

    routes: {

        'dispenseManager': 'home',
        'dispenseManager/productPage/:id': 'productPage',
        'dispenseManager/viewCodes/:id': 'viewCodes',
        'dispenseManager/addCodes/:id': 'addCodes',
        'dispenseManager/addProduct': 'addProduct',
        'dispenseManager/editProduct/:id': 'editProduct',
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

    viewCodes: function(id) {

        var findModel = app.products.get(id);

        this.trigger('page', new ViewCodesPage({

            model: findModel,
            productId: id

        }));
    },

    addCodes : function(id) {

        var findModel = app.products.get(id);

        this.trigger('page', new AddCodesPage({

            model: findModel,
            productId: id

        }));
    },

    addProduct : function() {

         this.trigger('page', new AddProductPage());

    },

    editProduct : function(id){

        var findModel = app.products.get(id);

        this.trigger('page', new EditProductPage({

            model: findModel,
            productId: id

        }));

    },

    catchAll: function() {

        this.redirectTo('dispenseManager');

    }
});