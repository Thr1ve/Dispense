// receivedCode Collection - received-code-collection.js
var AmpCollection = require('ampersand-rest-collection');
var receivedCode = require('./received-code');


module.exports = AmpCollection.extend({
    model: receivedCode,
    url: '/api/received-code-collection'
});