/*global app*/
var PageView = require('./base');
var templates = require('../templates');
logger = require('andlog');

//later, this should simply hold smaller pieces(views) such as "available codes"
//"current trending issues" "server status for product (if it is service such as WileypLUS)"
module.exports = PageView.extend({
    pageTitle: 'View Codes',

    template: templates.pages.productStatus,

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
                    for(var i = 0; i < self.availableCodes.codes.length ;i++){
                        self.renderSubview(
                            new PageView({
                                template: '<li class= "list-group-item container-fluid">item '+ self.availableCodes.codes[i] + '</li>'
                            }),
                            self.queryByHook('availableCodes-list')
                        );
                    }
                }
            });
        } else {
            logger.log('The Models or Codes were found!');
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

                    self.availableCodes= model;
                    self.renderWithTemplate();
                    for(var i = 0; i < self.availableCodes.codes.length ;i++){
                        self.renderSubview(
                            new PageView({
                                template: '<li class= "list-group-item container-fluid">'+ self.availableCodes.codes[i] + '</li>'
                            }),
                            self.queryByHook('availableCodes-list')
                        );
                    }
                }
            });
        }
    },

    //this may actually need to be in a session variable?
    bindings : {
        'model.title': '[data-hook~=title]',
    },

    events: {
        'click .navigateAdd': 'navigateAdd'
    },


    navigateAdd: function() {
        app.navigate('/dispenseManager/modifyProduct/' + this.model.productId);
    }

});