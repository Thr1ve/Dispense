var PageView = require('./base');
var SubCollection = require('ampersand-subcollection');
var AmpersandInputView = require('ampersand-input-view');
var templates = require('../templates');
var ProductView = require('../views/product');
var Fuse = require('fuse.js');


module.exports = PageView.extend({

    template: templates.pages.products,

    events : {
        'keyup .form-input' : 'filter'
    },

    bindings : {
        'model.search' : '[data-hook=search]'
    },

    pageTitle: 'products',


    filter : function() {
        // console.log(this.collection.models);
        var fuse = new Fuse(this.collection.models , {
            keys : ['isbn13']
        });
        // console.log(fuse.search('9780470398739'));
        console.log(this.get('#form-input'));
    },

    filtered: function() {
        return new SubCollection( this.collection, {
            // where : {
            //     title: this.input.value
            // }
            // comparator: function (model) {
            //     return model;
            // }
        });
    },

    render: function () {
        // console.log(this.filtered());
        this.renderWithTemplate();
        // this.input.render();
        // console.log(this.collection);
        this.renderCollection(this.filtered(), ProductView, this.queryByHook('products-list'));
        if (!this.collection.length) {
            this.fetchCollection();
        }
    },
    fetchCollection: function () {
        this.collection.fetch();
        return false;
    }
});

