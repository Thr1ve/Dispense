/*global app*/
var PageView = require('./base');
var templates = require('../templates');
var StudentForm = require('../forms/studentForm.js');

module.exports = PageView.extend({
    initialize: function() {
        var self = this;
        if (!this.model) {
            console.log('Model not found. Fetching model with id: ' + this.productId + '...');
            app.products.getOrFetch(this.productId, {
                all: true
            }, function(err, model) {
                if (err) {
                    console.dir(err);
                } else {
                    self.model = model;
                    console.log('...found Model!');
                    console.dir(model);
                    console.log('\n');
                    console.log('\n');
                }
            });
        } else {
            console.log('The Model was found!');
            console.dir(this.model);
        }
    },

    //this may actually need to be in a session variable?
    props: {
        productId: 'string'
    },

    pageTitle: 'Request Code',

    template: templates.pages.requestCode,

    subviews: {

        form: {

            container: '[data-hook=product-form]',
            waitFor: 'model',

            prepareView: function(el) {
                console.log('prepareView Started...');
                console.dir(this);
                return new StudentForm({

                    data: {
                        config: this.model.config
                    },

                    el: el,

                    model : this.model,

                    submitCallback: function(data) {
                        app.newCode.create(data, {

                            wait: true,

                            success: function() {

                                app.navigate('/codeReceived');

                            }
                        });
                    }
                });
            }
        }
    }
});