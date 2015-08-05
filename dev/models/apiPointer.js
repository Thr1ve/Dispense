// userState Collection - user-state-collection.js
/*global env */
let AmpCollection = require('ampersand-rest-collection')

module.exports = AmpCollection.extend({

  pointer: env.vars.apiUrl,

  initialize () {
    this.url = 'http://localhost:5000/api/' + this.location
  }
})
