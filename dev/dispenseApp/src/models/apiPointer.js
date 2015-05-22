// userState Collection - user-state-collection.js
var AmpCollection = require('ampersand-rest-collection');

module.exports = AmpCollection.extend({
    
    // pointer: 'http://192.168.1.85/api/',
    // pointer: 'http://thrive.geekgalaxy.com/api/',
    // pointer: 'http://localhost:8080/api/',
    pointer: 'http://10.8.2.114:8080/api/',
    

    initialize : function() {
        this.url = this.pointer + this.location;
    }
});