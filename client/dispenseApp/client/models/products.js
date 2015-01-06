// product Collection - product-collection.js
var AmpCollection = require('ampersand-rest-collection');
var product       = require('./product');
var Fuse          = require('fuse.js');

var log = require('bows')("Products Collection");

//this is our collection of products
//it also holds the "filter" function which creates a
//new collection of itself with only products that meet the search criteria

module.exports = AmpCollection.extend({

    model: product,

    url: '/api/products',

    initialize : function() {

        var self = this;

        //create filtered collection
        this.filtered = new AmpCollection(self.models);

    },

    filter : function(string) {

        var fuse = new Fuse(this.models , {

            keys : ['isbn13', 'title'],
            threshold : 0.4,
            distance : 5

        });

        this.filtered.set(fuse.search(string));
    }

});