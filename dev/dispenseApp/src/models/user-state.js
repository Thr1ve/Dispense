// userState Model - user-state.js
let AmpModel = require("ampersand-model")
let app = require("ampersand-app")

//this is the user-state model.
//Currently, I am using it more as a way to store
//the current user-specific states between views and such.
//for instance, we store the contents of the search box here

module.exports = AmpModel.extend({

  type: "user",

  props: {

  },

  derived: {

  }

})
