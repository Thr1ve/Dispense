/*global app*/
var Router = require('ampersand-router');

//pages
var HomePage = require('./pages/homeSearchPage');
var AddCodesPage = require('./pages/addCodesPage.js');
var AddProductPage = require('./pages/addProductPage');
var ProductPage = require('./pages/productPage');
var EditProductPage = require('./pages/editProductPage.js');

var log = require('bows')("Router");

module.exports = Router.extend({

    routes: {

        'dispenseManager': 'home',
        'dispenseManager/productPage/:id': 'productPage',
        'dispenseManager/addCodes/:id': 'addCodes',
        'dispenseManager/addProduct': 'addProduct',
        'dispenseManager/editProduct/:id': 'editProduct',
        '(*path)': 'catchAll'

    },

    // ------- ROUTE HANDLERS ---------
    home: function() {
        log('Routing to Home Page');

        //not sure if I want this here...this
        //resets displayed products on home page
        app.user.clear();

        this.trigger('page', new HomePage({

            model: app.user,
            collection: app.products

        }));
    },

    productPage : function(id){
        log('Routing to Product Page');

        this.trigger('page', new ProductPage({

            productId: id,
            collection: app.usedCodeCollection

        }));
    },

    addCodes : function(id) {
        log('Routing to Add Codes Page');

        this.trigger('page', new AddCodesPage({

            productId: id

        }));
    },

    addProduct : function() {
        log('Routing to Add Product Page');

         this.trigger('page', new AddProductPage());

    },

    editProduct : function(id){
        log('Routing to Edit Product Page');

        this.trigger('page', new EditProductPage({

            productId: id

        }));

    },

    catchAll: function() {
        log('Catch-All called because route unknown. Routing back to Home Page');

        this.redirectTo('dispenseManager');

    }
});