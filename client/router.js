/*global me, app*/
var Router = require('ampersand-router');

//pages
var HomePage = require('./pages/home');
var ProductsPage = require('./pages/products');
var RequestCodePage = require('./pages/requestCode');
var CodeReceived = require('./pages/codeReceived');


module.exports = Router.extend({
    routes: {
        '': 'home',
        'products': 'products',
        'requestCode': 'requestCode',
        'codeReceived': 'codeReceived',
        '(*path)': 'catchAll'
    },

    // ------- ROUTE HANDLERS ---------
    home: function () {
        this.trigger('page', new HomePage({
            model: me
        }));
    },

    products: function () {
        this.trigger('page', new ProductsPage({
            model: me,
            collection: app.products
        }));
    },

    requestCode: function () {
        this.trigger('page', new RequestCodePage({
            model: me,
            collection: app.newCode
        }));
    },

    codeReceived: function () {
        this.trigger('page', new CodeReceived({
            model: me,
            collection: app.newCode
        }));
    },

    catchAll: function () {
        this.redirectTo('');
    }
});
