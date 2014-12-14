// product Collection - product-collection.js
var AmpCollection = require('ampersand-rest-collection');
var product = require('./product');


module.exports = AmpCollection.extend({
    model: product,
    url: '/api/products'
});