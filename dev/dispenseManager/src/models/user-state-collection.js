// userState Collection - user-state-collection.js
import AmpCollection from "./apiPointer.js"
import userState from "./user-state"


module.exports = AmpCollection.extend({

  model: userState,

  location: "user-state",

  initialize() {
    AmpCollection.prototype.initialize.call(this)
  }
})
