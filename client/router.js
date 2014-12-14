/*global me, app*/
var Router = require('ampersand-router');

//pages
var HomePage = require('./pages/home');
var ProductsPage = require('./pages/products.js');


module.exports = Router.extend({
    routes: {
        '': 'home',
        'products': 'products',
        '(*path)': 'catchAll'
    },

    // ------- ROUTE HANDLERS ---------
    home: function () {
        this.trigger('page', new HomePage({
            model: me
        }));
    },

    collectionDemo: function () {
        this.trigger('page', new CollectionDemo({
            model: me,
            collection: app.people
        }));
    },

    products: function () {
        this.trigger('page', new ProductsPage({
            model: me,
            collection: app.products
        }));
    },

    catchAll: function () {
        this.redirectTo('');
    }
});
