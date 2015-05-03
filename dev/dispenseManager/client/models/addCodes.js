var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({

    props: {
        productId: 'any',
        codes: 'array'
    },

    session: {},

    derived: {
        id : function() {
            return this.productId;
        }
    },

    url: 'http://localhost:3000/api/availableCodes-collection/addCodes'

});