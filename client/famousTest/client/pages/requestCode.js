/*global app*/
var PageView = require('./base');
var templates = require('../templates');
var StudentForm = require('../forms/studentForm.js');

var log = require('bows')("Request Code Page");

module.exports = PageView.extend({
    initialize: function() {
        log(this.productId);
        var self = this;
        if (!this.model) {
            log('Model not found. Fetching model with id: ' + this.productId + '...');
            app.products.getOrFetch(this.productId, {
                all: true
            }, function(err, model) {
                if (err) {
                    log(err);
                } else {
                    self.model = model;
                    log('...found Model!');
                    log(model);
                }
            });
        } else {
            log('The Model was found!');
            log(this.model);
        }
    },

    //this may actually need to be in a session variable?
    props: {
        productId: 'string'
    },

    bindings : {
        'model.title': '[data-hook~=title]'
    },

    pageTitle: 'Request Code',

    template: templates.pages.requestCode,

    subviews: {

        form: {

            // container: '[data-hook=product-form]',
            container: 'form',
            waitFor: 'model',

            prepareView: function(el) {
                log('prepareView Started...');
                log(this);
                return new StudentForm({

                    // data: {
                    //     config: this.model.config
                    // },

                    el: el,

                    // model : this.model,

                    submitCallback: function(data) {
                        var id = this.parent.productId;
                        data.productId = id;
                        app.newCode.reset();
                        app.newCode.create(data, {

                            wait: true,

                            success: function(model , resp) {
                                log(model);
                                if(!model.code){
                                    alert('NO CODES LEFT');
                                }
                                log(resp);
                                app.navigate('/famousTest/codeReceived');

                            }
                        });
                    }
                });
            }
        }
    }
});