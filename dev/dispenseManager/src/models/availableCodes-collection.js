import AmpCollection from './apiPointer.js'
import availableCodes from './availableCodes'

module.exports = AmpCollection.extend({

    location: 'availableCodes-collection',

    initialize() {
        AmpCollection.prototype.initialize.call(this)
    },

    model: availableCodes

})