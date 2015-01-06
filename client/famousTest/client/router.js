/*global app*/
var Router = require('ampersand-router');

//pages
var HomePage = require('./pages/B_Home');
var RequestCodePage = require('./pages/requestCode');
var CodeReceived = require('./pages/codeReceived');

var log = require('bows')("Router");

module.exports = Router.extend({

    routes: {

        'famousTest': 'home',
        'famousTest/requestCode/:id': 'requestCode',
        'famousTest/codeReceived': 'codeReceived',
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

    requestCode: function(id) {
        log(app.products);
        var findModel = app.products.get(id);
        log(findModel);
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

        this.redirectTo('famousTest');

    }
});