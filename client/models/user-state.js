// userState Model - user-state.js
var AmpModel = require('ampersand-model');


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
        //here we will store server side information
        id: ['string'] ,
        firstName: ['string', true, 'defaultUserFirstName'],
        lastName: ['string', true, 'defaultUserLastName'],
        username: ['string']
    },

    derived: {

    },

    session: {
        //here we will put app side stat information

        searchValue: ['string', false, '']

        //can we store current input field values for each
        //requestCode page we have open?
        // currentForms: 'array', // ??

        // selectedForm:

    },

    getSearchValue : function(){
        var self = this;
        return self.searchValue;
   }

});


