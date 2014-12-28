/*global app*/
var Router = require('ampersand-router');

//pages
var HomePage = require('./pages/B_Home');
var ProductStatusPage = require('./pages/productStatus');
var CodeReceived = require('./pages/codeReceived');


module.exports = Router.extend({

    routes: {

        'dispenseManager': 'home',
        'dispenseManager/productStatus/:id': 'productStatus',
        'dispenseManager/codeReceived': 'codeReceived',
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

            collection: app.newCode,
            model: findModel,
            productId: id

        }));
    },

    codeReceived: function() {

        this.trigger('page', new CodeReceived({

            collection: app.newCode

        }));
    },

    catchAll: function() {

        this.redirectTo('dispenseManager');

    }
});