// userState Model - user-state.js
let AmpModel = require("ampersand-model")
let app = require("ampersand-app")

//this is the user-state model.
//Currently, I am using it more as a way to store
//the current user-specific states between views and such.
//for instance, we store the contents of the search box here

module.exports = AmpModel.extend({

    //I may want to move these listeners to
    //the products collection instead
    initialize: function() {
        this.on("change:searchValue", function() {
            app.products.filter(this.searchValue)
        })
    },

    type: "user",

    props: {

    },

    derived: {

    },

    session: {

        //this holds the current content of the search box of the home page
        searchValue: ["string", false, ""]

    },

    getSearchValue: function(){
        let self = this
        return self.searchValue
   }

})
