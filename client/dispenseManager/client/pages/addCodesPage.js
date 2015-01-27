/*global app*/
var PageView = require('./productPagesBase');
var templates = require('../templates');
var AddCodesRequest = require('../models/addCodes.js');
var AddCodesForm = require('../forms/addCodesForm.js');
var EscapeTrigger = require('../views/escapeTriggerAC.js');

var log = require('bows')("Modify Product Page");

module.exports = PageView.extend({

    template: templates.pages.addCodes,

    pageTitle: 'Add Codes',

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
                log('error...', model, response);
            }
        });

    },

});