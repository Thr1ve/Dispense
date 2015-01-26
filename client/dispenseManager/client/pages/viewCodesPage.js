/*global app*/
var PageView = require('./base');
var templates = require('../templates');
var EscapeTrigger = require('../views/escapeTriggerAC.js');
var View = require('ampersand-view');

var log = require('bows')("Product Status Page");

//later, this should simply hold smaller pieces(views) such as "available codes"
//"current trending issues" "server status for product (if it is service such as WileypLUS)"
module.exports = PageView.extend({

    pageTitle: 'View Codes',

    template: templates.pages.productStatus,

    props: {
        productId: 'string',
        availableCodes: 'model'
    },

    keyboardShortcuts : {
        'escape':'returnNavigate'
    },

// this needs to be rewritten....too sloppy and delicate
    initialize: function() {

        this.escapeKeyBuffer = 0;
        this.registerKeyboardShortcuts(this.pageTitle);
        this.escapeAlert = new EscapeTrigger({duration:1000});

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
                    self.renderSubview(self.escapeAlert, '.prompt');
                    for(var i = 0; i < self.availableCodes.codes.length ;i++){
                        self.renderSubview(
                            new View({
                                template: '<li class= "list-group-item container-fluid">item '+ self.availableCodes.codes[i] + '</li>'
                            }),
                            self.queryByHook('availableCodes-list')
                        );
                    }
                }
            });
        } else {
            log('The Models or Codes were found!');
            log(self.productId);
            app.availableCodes.getOrFetch(self.productId, {
                all: true
            }, function(err, model) {
                if (err) {
                    log(err);
                } else {
                    log('...found Codes!', model);

                    self.availableCodes = model;
                    self.renderWithTemplate();
                    self.renderSubview(self.escapeAlert, '.prompt');
                    for(var i = 0; i < self.availableCodes.codes.length ;i++){
                        self.renderSubview(
                            new View({
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
        'model.title': '[data-hook~=title]'
    },

    events: {
        'click .navigateAdd': 'navigateAdd'
    },

    navigateAdd: function() {
        app.navigate('/dispenseManager/modifyProduct/' + this.model.productId);
    }

});