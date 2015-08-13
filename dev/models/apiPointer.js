/* global env */
// userState Collection - user-state-collection.js
import AmpCollection from 'ampersand-rest-collection'

module.exports = AmpCollection.extend({

  pointer: env.vars,

  initialize () {
    console.log('a random test change')
    this.url = this.pointer + this.location
  }
})
