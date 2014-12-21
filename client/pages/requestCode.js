/*global app*/
var PageView = require('./base');
var templates = require('../templates');
var StudentForm = require('../forms/studentForm.js');

module.exports = PageView.extend({
    initialize: function() {
        // PageView.prototype.initialize.apply(this, arguments);
        if (!this.model) {

            // console.dir('Model not found. Fetching model with id: ' + this.productId + '...');

            app.products.getOrFetch(this.productId, {

                all: true

            }, function(err, model) {

                if (err) {

                    // console.dir(err);

                } else {

                    this.model = model;
                    // this.subviews.model = model;

                    // console.dir('...found Model!');
                    // console.dir(this.model);

                }
            });
        } else {

            this.model = this.model;
            // console.dir('The Model was found!');
            // console.dir(this.model);

        }
    },

    props: {
        productId: 'string'
    },

    pageTitle: 'Request Code',

    template: templates.pages.requestCode,

    subviews: {

        form: {

            container: '[data-hook=product-form]',
            // waitFor: 'model.config',

            prepareView: function(el) {
                // console.dir('prepareView Started...');
                // console.dir(this);
                return new StudentForm({

                    data : {
                        config : this.model.config
                    },

                    el : el,

                    submitCallback: function(data) {
                        console.dir('WE SUBMITTD A CALLBACK');
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