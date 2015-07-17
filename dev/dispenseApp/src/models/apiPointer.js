// userState Collection - user-state-collection.js
/*global env */
let AmpCollection = require('ampersand-rest-collection')

module.exports = AmpCollection.extend({

  pointer: env.vars.apiUrl,

  initialize () {
    this.url = this.pointer + this.location
  }
})
