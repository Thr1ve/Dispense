var AmpCollection = require('ampersand-rest-collection');
var request = require('./request');

//this holds the requests for codes that the user
//has received

module.exports = AmpCollection.extend({
    model: request,
    url: '/api/request-collection'
});