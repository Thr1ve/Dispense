var PageView = require('./base');
var templates = require('../templates');
var ProductView = require('../views/product');


module.exports = PageView.extend({

    pageTitle: 'products',

    template: templates.pages.products,

    render: function () {
        this.renderWithTemplate();
        this.renderCollection(this.collection, ProductView, this.queryByHook('products-list'));
        if (!this.collection.length) {
            this.fetchCollection();
        }
    },
    fetchCollection: function () {
        this.collection.fetch();
        return false;
    }
});