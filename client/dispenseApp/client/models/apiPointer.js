// userState Collection - user-state-collection.js
var AmpCollection = require('ampersand-rest-collection');

module.exports = AmpCollection.extend({
    
    pointer: 'http://localhost:3000/api/',

    initialize : function() {
        this.url = this.pointer + this.location;
    }
});