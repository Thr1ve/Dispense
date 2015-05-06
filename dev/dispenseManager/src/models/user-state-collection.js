// userState Collection - user-state-collection.js
var AmpCollection = require('./apiPointer.js');
var userState = require('./user-state');


module.exports = AmpCollection.extend({
    
    model: userState,

    location: 'user-state',

    initialize: function() {
        AmpCollection.prototype.initialize.call(this);
    }
});