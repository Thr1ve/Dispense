// product Collection - product-collection.js
var AmpCollection = require('ampersand-rest-collection');
var product       = require('./product');
var Fuse          = require('fuse.js');

module.exports = AmpCollection.extend({

    model: product,

    url: '/api/products',

    initialize : function() {
        var self = this;
        this.filtered = new AmpCollection(self.models);
    },

    filter : function(string) {

        var fuse = new Fuse(this.models , {
            keys : ['isbn13', 'title'],
            threshold : 0.35,
            distance : 250
        });

        this.filtered.set(fuse.search(string));

        if(string){
            this.select(this.filtered.models[0]);
            this.filtered.selected = 0;
        }
    },

    /**
     * function that checks isSelected for an already existing model, removes that model
     * if there is one, places the new model in its place,
     * and turns on the 'selected' state of the model
     * @param  {model} model A model being passed for selection
     * @return {n/a}
     */
    select : function(model) {
        // log('calling select function');
        if(this.isSelected){
            this.deselect();
            this.isSelected = model;
            // log('selection set', this.isSelected.title, this.isSelected);
            this.isSelected.toggle('selected');
        }
        else{
            this.isSelected = model;
            this.isSelected.toggle('selected');
        }
    },

    /**
     * deselect the current isSelected model
     * @return {n/a}
     */
    deselect : function() {
        // log('calling deselect function');
        this.isSelected.selected = false;
        this.isSelected = false;
        // log('previous selected product is now deselected');
    }

});