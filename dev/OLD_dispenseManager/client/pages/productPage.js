var PageView = require('./productPagesBase');
var templates = require('../templates');

var log = require('bows')("Product Page");

module.exports = PageView.extend({

    pageTitle: 'Product Page',

    template: templates.pages.productPage,

    initialize: function() {

        PageView.prototype.initialize.apply(this);

        var self = this;

        if (!this.collection.length) {
            this.fetchCollection();
            console.log(this.collection);
        }
        console.log(this.collection);
        // app.usedCodeCollection.getOrFetch(this.productId, {
        //     all: true
        // }, function(err, model) {
        //     if (err) {
        //         log(err);
        //     } else {
        //         log('...found Codes!', model);

        //         self.availableCodes = model;
        //         for(var i = 0; i < self.availableCodes.codes.length ;i++){
        //             self.renderSubview(
        //                 new View({
        //                     template: '<li class= "list-group-item container-fluid">'+ self.availableCodes.codes[i] + '</li>'
        //                 }),
        //                 self.queryByHook('availableCodes-list')
        //             );
        //         }
        //     }
        // });
    },
    fetchCollection: function () {
        this.collection.fetch();
        return false;
    }
});