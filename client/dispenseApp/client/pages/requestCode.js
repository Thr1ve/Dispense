/*global app*/
var PageView = require('./base');
var templates = require('../templates');
var StudentForm = require('../forms/requestCodeForm.js');
var EscapeTrigger = require('../views/escapeTriggerAC.js');

var log = require('bows')("Req Code Page");

//this is the page that gives the user a form with which to
//request a code.

module.exports = PageView.extend({

    pageTitle: 'Request Code',

    template: templates.pages.requestCode,


    props: {
        productId: 'string'
    },

    bindings : {
        'model.title': '[data-hook~=title]'
    },

    keyboardShortcuts : {
         'escape':'returnNavigate'
    },

    initialize: function() {

        this.escapeKeyBuffer = 0;
        this.registerKeyboardShortcuts('requestCode');

        var self = this;

        //if we don't have a model attached yet...
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

                return new StudentForm({

                    el: el,

                    submitCallback: function(data) {

                        var id = this.parent.productId;

                        data.productId = id;
                        app.newCode.reset();
                        app.newCode.create(data, {

                            //this tells the app to wait for a response from the server
                            //before moving to the success callback
                            wait: true,

                            success: function(model , resp) {

                                log(model);

                                if(!model.code){
                                    //this most certainly needs to be handled better than
                                    //just throwing an alert at the user.
                                    alert('NO CODES LEFT FOR THIS PRODUCT');
                                }

                                app.navigate('/dispenseApp/codeReceived');

                            }
                        });
                    }
                });
            }
        }
    }

});