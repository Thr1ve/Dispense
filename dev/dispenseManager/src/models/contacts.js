// userState Collection - user-state-collection.js
import AmpCollection from "./apiPointer.js"
import contact from "./contact.js"


module.exports = AmpCollection.extend({

    model: contact,

    location: "contacts",

    initialize() {
        AmpCollection.prototype.initialize.call(this)
    }
})
