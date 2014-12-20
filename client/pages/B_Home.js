var PageView      = require('./base');
var AmpCollection = require('ampersand-collection');
var templates     = require('../templates');
var ProductView   = require('../views/product');
var Fuse          = require('fuse.js');


module.exports = PageView.extend({

    initialize : function() {
        this.filtered = new AmpCollection(this.collection.models);
    },

    template: templates.pages.products,

    events : {
        'keyup [data-hook=input]' : 'filter'
    },

    pageTitle: 'products',

    filter : function() {
        var fuse = new Fuse(this.collection.models , {
            keys : ['isbn13', 'title'],
            threshold : 0.4,
            distance : 5
        });
        var newFiltered = fuse.search(this.queryByHook('input').value);
        this.filtered.set(newFiltered);
    },

    render: function () {
        this.renderWithTemplate();
        this.renderCollection(this.filtered, ProductView, this.queryByHook('products-list'));
        if (!this.collection.length) {
            this.fetchCollection();
        }
    },
    fetchCollection: function () {
        this.collection.fetch();
        return false;
    }
});

