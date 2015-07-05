// userState Collection - user-state-collection.js
let AmpCollection = require("./apiPointer.js")
let userState = require("./user-state")


module.exports = AmpCollection.extend({

    model: userState,

    location: "user-state",

    initialize: function() {
        AmpCollection.prototype.initialize.call(this)
    }
})
