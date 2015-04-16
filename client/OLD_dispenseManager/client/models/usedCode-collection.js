var AmpCollection = require('ampersand-rest-collection');
var usedCode = require('./usedCode.js');

module.exports = AmpCollection.extend({

    model: usedCode,

    url: '/api/usedCode-collection'

});