var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({

    props: {

        productId: 'any',
        code:'string'

    },

    session: {

    },

    derived: {
        id: function() {
            return this.productId;
        }
    },

    url: '/api/availableCodes'

});