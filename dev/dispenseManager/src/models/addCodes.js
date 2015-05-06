var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({

    location: 'availableCodes-collection/addCodes',

    initialize : function() {
        this.url = 'http://localhost:8080/api/'+ this.location;
        console.log('url', this.url);
    },

    props: {
        productId: 'any',
        codes: 'array'
    },

    session: {},

    derived: {
        id : function() {
            return this.productId;
        }
    }
});