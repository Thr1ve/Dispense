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
        'click .productPage': 'toProductPage',
        'click .editProduct': 'toEditProduct',
        'click .addCodes': 'toAddCodes',
        'click .viewCodes': 'toViewCodes'
    },

    keyboardShortcuts : {
        'escape':'returnNavigate',
        'alt + 1': 'toProductPage',
        'alt + 2': 'toEditProduct',
        'alt + 3': 'toAddCodes',
        'alt + 4': 'toViewCodes'
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

        PageView.prototype.initialize.call(this);

        var self = this;

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
                self.toViewCodes();
            },

            error: function(model, response) {
                log('error...');
                log(model);
                log(response);
            }
        });

    },

});