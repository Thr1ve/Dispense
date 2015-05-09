import AmpModel from 'ampersand-model'

module.exports = AmpModel.extend({

    //I may want to move these listeners to
    //the products collection instead
    initialize() {
        this.on('change:searchValue' , function() {
            app.products.filter(this.searchValue)
        })
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

        searchValue: ['string', false, ''],

        //Current codes we've generated
        // receivedCodes: [],

        //Should we store the form input we've entered so far?
        //store data for current 'client'?

        //store data for current 'product'?
        workingProduct : ['string', false, ''] //product id?? or store entire model??

        //can we store current input field values for each
        //requestCode page we have open?
        // currentForms: 'array', // ??

        // selectedForm:

    },

    getSearchValue(){
        var self = this
        return self.searchValue
   }

});


