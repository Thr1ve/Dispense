var AmpCollection = require('ampersand-rest-collection');
var availableCodes = require('./availableCodes');

module.exports = AmpCollection.extend({

    model: availableCodes,

    url: '/api/availableCodes-collection',


});