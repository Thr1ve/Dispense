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
        'escape':'returnNavigate',
        'q': 'toViewCodes',
        'w': 'toProductPage',
        'e': 'toEditProduct'
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
            },

            error: function(model, response) {
                log('error...');
                log(model);
                log(response);
            }
        });

    },

    toViewCodes : function() {
        app.navigate('/dispenseManager/viewCodes/' + this.model.productId);
    },

    toProductPage: function() {
        app.navigate('/dispenseManager/productPage/' + this.model.productId);
    },

    toEditProduct : function() {
        app.navigate('/dispenseManager/editProduct/' + this.model.productId);
    }

});