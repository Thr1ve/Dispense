/*global app*/
var PageView = require('./base');
var templates = require('../templates');
var AddCodesRequest = require('../models/addCodes.js');
var logger = require('andlog');

//later, this should simply hold smaller pieces(views) such as "available codes"
//"current trending issues" "server status for product (if it is service such as WileypLUS)"
module.exports = PageView.extend({

    pageTitle: 'Add Codes',

    template: templates.pages.modifyProduct,

    props: {
        productId: 'string',
        availableCodes: 'model'
    },


    initialize: function() {
        var self = this;
        if (!this.model) {
            logger.log('Model not found. Fetching model with id: ' + this.productId + '...');

            app.products.getOrFetch(this.productId, {
                all: true
            }, function(err, model) {
                if (err) {
                    logger.log(err);
                } else {
                    logger.log('...found Model!');
                    logger.log(model);
                    logger.log('\n');
                    logger.log('\n');

                    self.model = model;
                }
            });
            app.availableCodes.getOrFetch(this.productId, {
                all: true
            }, function(err, model) {
                if (err) {
                    logger.log(err);
                } else {
                    logger.log('...found Codes!');
                    logger.log(model);
                    logger.log('\n');
                    logger.log('\n');

                    self.availableCodes = model;
                }
            });
        } else {
            logger.log('The Models or Codes were found!');
            app.availableCodes.getOrFetch(self.productId, {
                all: true
            }, function(err, model) {
                if (err) {
                    logger.log(err);
                } else {
                    logger.log('...found Codes!');
                    logger.log(model);
                    logger.log('\n');
                    logger.log('\n');

                    self.availableCodes = model;
                }
            });
        }
    },

    //this may actually need to be in a session variable?
    bindings: {
        'model.title': '[data-hook~=title]',
    },

    events: {
        'click .navigateView': 'navigateView',
        'click .addButton': 'testAdd',
    },

    navigateView: function() {
        app.navigate('/dispenseManager/productStatus/' + this.model.productId);
    },

    testAdd: function() {

        var self = this;
        var addCodesRequest = new AddCodesRequest();

        addCodesRequest.save(
        {
            "codes": [
                "test1",
                "test2",
                "test3",
                "test4",
                "test5"
            ],
            "productId": self.productId
        },
         {

            wait: true,

            isNew: true,

            url: '/api/availableCodes-collection/addCodes',

            success: function(model, response) {

                app.availableCodes.set(response.productId, model);
            },

            error: function(model, response) {
                logger.log('error...');
                logger.log(model);
                logger.log(response);
            }
        });

    }

});