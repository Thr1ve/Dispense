var PageView      = require('./base');
var templates     = require('../templates');
var ProductView   = require('../views/B_PanelFront');


module.exports = PageView.extend({

    // initialize : function() {
    // },

    template: templates.pages.B_Home,

    events : {
        'keyup [data-hook=input]' : 'updateSearch'
    },

    pageTitle: 'products',

    updateSearch : function() {
        this.model.searchValue = this.queryByHook('input').value;
    },

    render: function () {
        console.log('THIS IS THE ADMIN APP');
        this.renderWithTemplate();
        this.renderCollection(app.products.filtered, ProductView, this.queryByHook('products-list'));
        if (!this.collection.length) {
            this.fetchCollection();
        }
    },
    fetchCollection: function () {
        this.collection.fetch();
        return false;
    }
});

