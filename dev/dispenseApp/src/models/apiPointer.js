// userState Collection - user-state-collection.js
var AmpCollection = require('ampersand-rest-collection');

module.exports = AmpCollection.extend({
    
    pointer: env.vars.apiUrl,

    initialize : function() {
        this.url = this.pointer + this.location;
    }
});