var PageView = require('./base');
var templates = require('../templates');

var log = require('bows')("Product Page");

module.exports = PageView.extend({

    pageTitle: 'Product Page',

    template: templates.pages.productPage,

    props: {
        productId: 'string',
        availableCodes: 'model'
    },

    bindings: {
        'model.title': '[data-hook~=title]'
    },
    
    events : {
        'click .productPage': 'toProductPage',
        'click .editProduct': 'toEditProduct',
        'click .addCodes': 'toAddCodes',
        'click .viewCodes': 'toViewCodes'
    },

    keyboardShortcuts : {
        'escape':'returnNavigate',
        'alt + 1': 'toProductPage',
        'alt + 2': 'toEditProduct',
        'alt + 3': 'toAddCodes',
        'alt + 4': 'toViewCodes'
    },

    initialize: function() {

        PageView.prototype.initialize.apply(this);

        var self = this;
        
        //search for the model with the product id...
        app.products.getOrFetch(this.productId, {
            all: true
        }, function(err, model) {
            if (err) {
                log(err);
            } else {
                //... and add it
                self.model = model;
                log('...found Model!', model);
            }
        });
    },

});