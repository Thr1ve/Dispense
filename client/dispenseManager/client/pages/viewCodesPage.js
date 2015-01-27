/*global app*/
var PageView = require('./productPagesBase');
var templates = require('../templates');
var View = require('ampersand-view');

var log = require('bows')("Product Status Page");

//later, this should simply hold smaller pieces(views) such as "available codes"
//"current trending issues" "server status for product (if it is service such as WileypLUS)"
module.exports = PageView.extend({

    pageTitle: 'View Codes',

    template: templates.pages.viewCodes,

    initialize: function() {

        PageView.prototype.initialize.apply(this);

        var self = this;

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

});