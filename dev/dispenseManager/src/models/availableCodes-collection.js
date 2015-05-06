var AmpCollection = require('./apiPointer.js');
var availableCodes = require('./availableCodes');

module.exports = AmpCollection.extend({

    location: 'availableCodes-collection',

    initialize : function() {
        AmpCollection.prototype.initialize.call(this);
    },

    model: availableCodes

});