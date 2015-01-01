/*global app*/
var Router = require('ampersand-router');

//pages
var HomePage = require('./pages/B_Home');
var ProductStatusPage = require('./pages/productStatus');


module.exports = Router.extend({

    routes: {

        'dispenseManager': 'home',
        'dispenseManager/productStatus/:id': 'productStatus',
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

    catchAll: function() {

        this.redirectTo('dispenseManager');

    }
});