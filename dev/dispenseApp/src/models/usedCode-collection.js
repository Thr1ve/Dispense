let AmpCollection = require("./apiPointer.js")
let usedCode = require("./usedCode")

//this holds the requests for codes that the user
//has received

module.exports = AmpCollection.extend({

    model: usedCode,

    location: "usedCode-collection",

    initialize: function() {
        AmpCollection.prototype.initialize.call(this)
    }
})
