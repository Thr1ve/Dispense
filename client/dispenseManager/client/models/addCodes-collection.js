// a collection may not be necessary -- possibly delete?
var AmpCollection = require('ampersand-rest-collection');
var addCodes= require('./addCodes');

module.exports = AmpCollection.extend({

    model: addCodes,

    // url: '/api/availableCodes-collection',

});