var AmpCollection = require('ampersand-rest-collection');
var usedCode = require('./usedCode');

//this holds the requests for codes that the user
//has received

module.exports = AmpCollection.extend({
    model: usedCode,
    url: '/api/usedCode-collection'
});