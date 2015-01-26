var PageView = require('./base');
var templates = require('../templates');
// var EscapeTrigger = require('../views/escapeTriggerAC.js');

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
         'escape':'returnNavigate'
    },

    initialize: function() {

        PageView.prototype.initialize.apply(this);

        log('Initializing in the product page.');

        var self = this;

        //if we don't have a model attached yet...
        if (!this.model) {

            log('Model not found. Fetching model with id: ' + this.productId + '...');

            //... then search for the model with the product id...
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
        } else {
            //otherwise, let us know that we already had a model
            log('The Model was found!', this.model);
        }
    },

    toViewCodes : function() {
        app.navigate('/dispenseManager/viewCodes/' + this.model.productId);
    },

    toAddCodes : function() {
        app.navigate('/dispenseManager/addCodes/' + this.model.productId);
    },

    toEditProduct : function() {
        app.navigate('/dispenseManager/editProduct/' + this.model.productId);
    }

});