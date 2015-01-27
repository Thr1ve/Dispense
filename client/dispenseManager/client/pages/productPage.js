var PageView = require('./productPagesBase');
var templates = require('../templates');

var log = require('bows')("Product Page");

module.exports = PageView.extend({

    pageTitle: 'Product Page',

    template: templates.pages.productPage

});