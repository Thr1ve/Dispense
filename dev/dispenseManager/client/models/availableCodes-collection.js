var AmpCollection = require('ampersand-rest-collection');
var availableCodes = require('./availableCodes');

module.exports = AmpCollection.extend({

    model: availableCodes,

    url: 'http://localhost:3000/api/availableCodes-collection'

});