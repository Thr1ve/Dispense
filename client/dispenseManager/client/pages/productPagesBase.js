var PageView = require('./base');
var EscapeTrigger = require('../views/escapeTriggerAC.js');

var log = require('bows')("Product Pages Base");

module.exports = PageView.extend({

    props: {
        productId: 'string',
        availableCodes: 'model'
    },

    bindings: {
        'model.title': '[data-hook~=title]',
    },

    events: {
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

    subviews: {

        escapeAlert: {
            container : '.prompt',
            prepareView: function(el) {
                return new EscapeTrigger({duration:1000, el:el}) ;
            }
        }
    },

    initialize: function() {

        log('Initializing in the Product Pages Base class');

        PageView.prototype.initialize.call(this);

        var self = this;

        app.products.getOrFetch(this.productId, {
            all: true
        }, function(err, model) {
            if (err) {
                log(err);
            } else {
                log('...found Model!', model);

                self.model = model;
            }
        });
            
    },

    toProductPage: function() {
        app.navigate('/dispenseManager/productPage/' + this.model.productId);
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
