/* global env */
// userState Collection - user-state-collection.js
import AmpCollection from 'ampersand-rest-collection'

module.exports = AmpCollection.extend({

  // pointer: env.vars.apiUrl,

  initialize () {
    this.url = 'http://localhost:8080/api/' + this.location
  }
})
