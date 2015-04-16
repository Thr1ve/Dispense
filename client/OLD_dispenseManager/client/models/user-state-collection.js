// userState Collection - user-state-collection.js
var AmpCollection = require('ampersand-rest-collection');
var userState = require('./user-state');


module.exports = AmpCollection.extend({
    model: userState,
    url: '/api/user-state'
});