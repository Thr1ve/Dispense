var PageView = require('./base');
var templates = require('../templates');
var AddProductForm = require('../forms/addProductForm');
var EscapeTrigger = require('../views/escapeTriggerAC.js');

var log = require('bows')("Add Product");

module.exports = PageView.extend({

    pageTitle: 'Add Product',

    template: templates.pages.addProduct,

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

            //here, we set up and render the form
            prepareView: function(el) {

                return new AddProductForm({

                    el: el,

                    submitCallback: function(data) {

                        app.products.create(data, {

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
    }
});
