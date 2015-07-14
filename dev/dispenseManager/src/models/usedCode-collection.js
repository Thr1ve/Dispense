import AmpCollection from "./apiPointer.js"
import usedCode from "./usedCode"

//this holds the requests for codes that the user
//has received

module.exports = AmpCollection.extend({

  model: usedCode,

  location: "usedCode-collection",

  initialize() {
    AmpCollection.prototype.initialize.call(this)
  }
})
