var PageView = require('./base');
var templates = require('../templates');
var AddProductForm = require('../forms/addProductForm');
var EscapeTrigger = require('../views/escapeTriggerAC.js');

var log = require('bows')("Edit Product");

//need to assign model...
//

module.exports = PageView.extend({

    pageTitle: 'Edit Product',

    template: templates.pages.editProduct,

    props: {
        productId: 'string',
        availableCodes: 'model'
    },

    bindings: {
        'model.title': '[data-hook~=title]'
    },

    keyboardShortcuts : {
        'escape':'returnNavigate',
        'alt + q': 'toViewCodes',
        'alt + w': 'toAddCodes',
        'alt + e': 'toProductPage'
    },

    subviews: {

        escapeAlert: {
            container : '.prompt',
            prepareView: function(el) {
                return new EscapeTrigger({duration:1000, el:el}) ;
            }
        },

        form: {

            container: 'form',

            waitFor: 'model',

            //here, we set up and render the form
            prepareView: function(el) {

                var model = this.model;

                return new AddProductForm({

                    el: el,

                    model: this.model,

                    submitCallback: function(data) {

                        model.save(data, {

                            //this tells the app to wait for a response from the server
                            //before moving to the success callback
                            wait: true,

                            success: function(model , resp) {

                                log(model);
                                alert('Edit Successful');
                                app.navigate('/dispenseManager/productPage/' + model.productId);

                            }
                        });
                    }
                });
            }
        }
    },

    initialize : function() {

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

    toProductPage: function() {
        e.preventDefault();
        app.navigate('/dispenseManager/productPage/' + this.model.productId);
    }
});