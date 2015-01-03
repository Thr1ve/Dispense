// product Collection - product-collection.js
var AmpCollection = require('ampersand-rest-collection');
var product       = require('./product');
var Fuse          = require('fuse.js');

module.exports = AmpCollection.extend({

    model: product,

    url: '/api/products',

    filter : function(string) {

        var fuse = new Fuse(this.models , {
            keys : ['isbn13', 'title'],
            threshold : 0.4,
            distance : 5
        });

        this.filtered.set(fuse.search(string));
    },

    initialize : function() {
        var self = this;
        this.filtered = new AmpCollection(self.models);
    }

});