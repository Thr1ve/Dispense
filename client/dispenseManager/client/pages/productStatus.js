/*global app*/
var PageView = require('./base');
var templates = require('../templates');
var StudentForm = require('../forms/studentForm.js');

module.exports = PageView.extend({
    pageTitle: 'Request Code',

    template: templates.pages.productStatus,

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
            app.availableCodes.getOrFetch(this.productId, {
                all: true
            }, function(err, model) {
                if (err) {
                    console.dir(err);
                } else {
                    console.log('...found Codes!');
                    console.dir(model);
                    console.log('\n');
                    console.log('\n');

                    self.availableCodes= model;
                }
            });
        } else {
            console.log('The Models or Codes were found!');
            app.availableCodes.getOrFetch(this.productId, {
                all: true
            }, function(err, model) {
                if (err) {
                    console.dir(err);
                } else {
                    console.log('...found Codes!');
                    console.dir(model);
                    console.log('\n');
                    console.log('\n');

                    self.availableCodes= model;
                }
            });
        }
    },

    //this may actually need to be in a session variable?
    props: {
        productId: 'string'
    },

    bindings : {
        'model.title': '[data-hook~=title]'
    },

});