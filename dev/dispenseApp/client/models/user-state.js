// userState Model - user-state.js
var AmpModel = require('ampersand-model');

//this is the user-state model.
//Currently, I am using it more as a way to store
//the current user-specific states between views and such.
//for instance, we store the contents of the search box here

module.exports = AmpModel.extend({

    //I may want to move these listeners to
    //the products collection instead
    initialize : function() {
        this.on('change:searchValue' , function() {
            app.products.filter(this.searchValue);
        });
    },

    type: 'user',

    props: {

    },

    derived: {

    },

    session: {

        //this holds the current content of the search box of the home page
        searchValue: ['string', false, ''],

    },

    getSearchValue : function(){
        var self = this;
        return self.searchValue;
   }

});


