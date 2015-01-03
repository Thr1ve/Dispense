// receivedCode Collection - received-code-collection.js
var AmpCollection = require('ampersand-rest-collection');
var request = require('./request');

//rename to requests? or request-collection ?
module.exports = AmpCollection.extend({
    model: request,
    url: '/api/request-collection'
});