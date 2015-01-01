/*global app*/
var PageView = require('./base');
var templates = require('../templates');
var StudentForm = require('../forms/studentForm.js');

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
            console.log('Model not found. Fetching model with id: ' + this.productId + '...');

            app.products.getOrFetch(this.productId, {
                all: true
            }, function(err, model) {
                if (err) {
                    console.dir(err);
                } else {
                    console.log('...found Model!');
                    console.dir(model);
                    console.log('\n');
                    console.log('\n');

                    self.model = model;
                }
            });
        } else {
            console.log('The Models or Codes were found!');
        }
    },

    //this may actually need to be in a session variable?
    bindings : {
        'model.title': '[data-hook~=title]',
    },

});