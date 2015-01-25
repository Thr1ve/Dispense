/*global app*/
var PageView = require('./base');
var templates = require('../templates');
var AddCodesRequest = require('../models/addCodes.js');
var AddCodesForm = require('../forms/addCodesForm.js');
var EscapeTrigger = require('../views/escapeTriggerAC.js');

var log = require('bows')("Modify Product Page");

module.exports = PageView.extend({

    template: templates.pages.addCodes,

    pageTitle: 'Add Codes',

    props: {
        productId: 'string',
        availableCodes: 'model'
    },

    bindings: {
        'model.title': '[data-hook~=title]',
    },

    events: {
        'click .navigateView': 'navigateView',
        'click .addButton': 'addCodes',
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

            container: '[data-hook~=addCodesForm]',

            prepareView: function(el) {
                var self = this;
                return new AddCodesForm({
                    el: el,
                    submitCallback: function(data) {
                        self.addCodes(data.newCodes);
                    }
                });
            }
        }
    },

    initialize: function() {
        this.escapeKeyBuffer = 0;
        this.registerKeyboardShortcuts('addCodesPage');
        var self = this;
        if (!this.model) {
            log('Model not found. Fetching model with id: ' + this.productId + '...');

            app.products.getOrFetch(this.productId, {
                all: true
            }, function(err, model) {
                if (err) {
                    log(err);
                } else {
                    log('...found Model!', model);

                    self.model = model;
                }
            });
            app.availableCodes.getOrFetch(this.productId, {
                all: true
            }, function(err, model) {
                if (err) {
                    log(err);
                } else {
                    log('...found Codes!', model);

                    self.availableCodes = model;
                }
            });
        } else {
            log('The Models or Codes were found!');
            app.availableCodes.getOrFetch(self.productId, {
                all: true
            }, function(err, model) {
                if (err) {
                    log(err);
                } else {
                    log('...found Codes!', model);

                    self.availableCodes = model;
                }
            });
        }
    },

    addCodes: function(data) {

        var self = this;
        var addCodesRequest = new AddCodesRequest();

        //this needs to be the data from the input field
        addCodesRequest.save(
        {
            "codes": data,
            "productId": self.productId
        },
         {

            wait: true,

            isNew: true,

            url: '/api/availableCodes-collection/addCodes',

            success: function(model, response) {
                alert('codes added');
                app.availableCodes.set(response.productId, model);
            },

            error: function(model, response) {
                log('error...');
                log(model);
                log(response);
            }
        });

    },

    navigateView: function() {
        app.navigate('/dispenseManager/productStatus/' + this.model.productId);
    },

});