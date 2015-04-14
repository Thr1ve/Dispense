// userState Collection - user-state-collection.js
var AmpCollection = require('ampersand-rest-collection');
var userState = require('./user-state');


module.exports = AmpCollection.extend({
    model: userState,
    //change too '/api/user-state-collection' for production
    url: 'http://localhost:3000/api/user-state'
});