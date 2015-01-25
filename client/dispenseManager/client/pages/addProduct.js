var PageView = require('./base');
var templates = require('../templates');
var AddProductForm = require('../forms/addProductForm');

var log = require('bows')("Add Product");

module.exports = PageView.extend({

    pageTitle: 'Add Product',

    template: templates.pages.addProduct,

    subviews: {

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
});
