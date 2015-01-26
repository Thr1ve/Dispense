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
        'click .viewCodes' : 'toViewCodes',
        'click .addCodes' : 'toAddCodes',
        'click .editProduct' : 'toEditProduct'
    },

    keyboardShortcuts : {
         'escape':'returnNavigate',
         'alt + q': 'toViewCodes',
         'alt + w': 'toAddCodes',
         'alt + e': 'toEditProduct'
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

    toViewCodes : function() {
        app.navigate('/dispenseManager/viewCodes/' + this.model.productId);
    },

    toAddCodes : function() {
        app.navigate('/dispenseManager/addCodes/' + this.model.productId);
    },

    toEditProduct : function() {
        e.preventDefault();
        app.navigate('/dispenseManager/editProduct/' + this.model.productId);
    }

});