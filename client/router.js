/*global me, app*/
var Router = require('ampersand-router');

//pages
var HomePage = require('./pages/B_Home');
var RequestCodePage = require('./pages/requestCode');
var CodeReceived = require('./pages/codeReceived');


module.exports = Router.extend({

    routes: {

        '': 'home',
        'requestCode/:id': 'requestCode',
        'codeReceived': 'codeReceived',
        '(*path)': 'catchAll'

    },

    // ------- ROUTE HANDLERS ---------
    home: function() {

        this.trigger('page', new HomePage({

            collection: app.products

        }));
    },

    requestCode: function(id) {

        var findModel = app.products.get(id);

        this.trigger('page', new RequestCodePage({

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

        this.redirectTo('');

    }
});