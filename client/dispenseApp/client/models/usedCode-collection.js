var AmpCollection = require('ampersand-rest-collection');
var usedCode = require('./usedCode');

//this holds the requests for codes that the user
//has received

module.exports = AmpCollection.extend({
    model: usedCode,
    //change too '/api/usedCode-collection' for production
    url: 'http://localhost:3000/api/usedCode-collection'
});