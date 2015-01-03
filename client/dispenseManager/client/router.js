/*global app*/
var Router = require('ampersand-router');
logger = require('andlog');

//pages
var HomePage = require('./pages/B_Home');
var ProductStatusPage = require('./pages/productStatus');
var ModifyProductPage = require('./pages/modifyProduct');


module.exports = Router.extend({

    routes: {

        'dispenseManager': 'home',
        'dispenseManager/productStatus/:id': 'productStatus',
        'dispenseManager/modifyProduct/:id': 'modifyProduct',
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

    catchAll: function() {

        this.redirectTo('dispenseManager');

    }
});