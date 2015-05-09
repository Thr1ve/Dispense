// userState Collection - user-state-collection.js
import AmpCollection './apiPointer.js'
import userState './user-state'


module.exports = AmpCollection.extend({
    
    model: userState,

    location: 'user-state',

    initialize() {
        AmpCollection.prototype.initialize.call(this)
    }
})