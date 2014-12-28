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
                console.log('prepareView Started...');
                console.dir(this);
                return new StudentForm({

                    // data: {
                    //     config: this.model.config
                    // },

                    el: el,

                    // model : this.model,

                    submitCallback: function(data) {
                        var id = this.parent.productId;
                        data.productId = id;
                        console.log('SUBMITTING: ');
                        console.log(data);
                        console.log(JSON.stringify(data));
                        var stringified = JSON.stringify(data);
                        app.newCode.reset();
                        app.newCode.create(data, {

                            wait: true,

                            success: function(model , resp) {
                                console.log(model);
                                if(!model.code){
                                    alert('NO CODES LEFT');
                                }
                                console.log(resp);
                                app.navigate('/dispenseManager/codeReceived');

                            }
                        });
                    }
                });
            }
        }
    }
});