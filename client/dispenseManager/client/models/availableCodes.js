var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({

    props: {

        productId: 'any',
        codes:'array',
        adding:['boolean', false, false]

    },

    session: {

    },

    derived: {
        id: function() {
            return this.productId;
        }

    },
    url: '/api/availableCodes-collection'

});