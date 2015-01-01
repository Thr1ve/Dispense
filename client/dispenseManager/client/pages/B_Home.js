var PageView      = require('./base');
var templates     = require('../templates');
var ProductView   = require('../views/B_PanelFront');

//for testing
var availableCodesModel = require('../models/availableCodes.js');

module.exports = PageView.extend({

    template: templates.pages.B_Home,

    events : {
        'keyup [data-hook=input]' : 'updateSearch'
    },

    pageTitle: 'products',

    updateSearch : function() {
        this.model.searchValue = this.queryByHook('input').value;
    },

    render: function () {
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

