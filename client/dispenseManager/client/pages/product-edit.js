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
        'escape':'returnNavigate'
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

                                app.navigate('/dispenseManager/modifyProduct/' + model.productId);

                            }
                        });
                    }
                });
            }
        }
    },

    initialize : function() {

        this.escapeKeyBuffer = 0;
        this.registerKeyboardShortcuts('addCodesPage');

        var self = this;

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
    }
});