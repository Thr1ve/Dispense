/*global app*/
var PageView = require('./base');
var templates = require('../templates');
var View = require('ampersand-view');

var log = require('bows')("Product Status Page");

//later, this should simply hold smaller pieces(views) such as "available codes"
//"current trending issues" "server status for product (if it is service such as WileypLUS)"
module.exports = PageView.extend({

    pageTitle: 'View Codes',

    template: templates.pages.viewCodes,

    props: {
        productId: 'string',
        availableCodes: 'model'
    },

    bindings : {
        'model.title': '[data-hook~=title]'
    },

    events: {
        'click .navigateAdd': 'navigateAdd'
    },

    keyboardShortcuts : {
        'escape':'returnNavigate',
         'alt + 1': 'toProductPage',
         'alt + 2': 'toAddCodes',
         'alt + 3': 'toEditProduct'
    },

    initialize: function() {

        PageView.prototype.initialize.apply(this);

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

        app.availableCodes.getOrFetch(this.productId, {
            all: true
        }, function(err, model) {
            if (err) {
                log(err);
            } else {
                log('...found Codes!', model);

                self.availableCodes = model;
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
    },

    toAddCodes: function() {
        app.navigate('/dispenseManager/addCodes/' + this.model.productId);
    },

    toProductPage: function() {
        app.navigate('/dispenseManager/productPage/' + this.model.productId);
    },

    toEditProduct : function() {
        app.navigate('/dispenseManager/editProduct/' + this.model.productId);
    }
});