var PageView = require('./productPagesBase');
var templates = require('../templates');
var AddProductForm = require('../forms/addProductForm');

var log = require('bows')("Edit Product");

module.exports = PageView.extend({

    pageTitle: 'Edit Product',

    template: templates.pages.editProduct,

    subviews: {

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
    }

});