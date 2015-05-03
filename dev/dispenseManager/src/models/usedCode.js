var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({

    props: {

        chatOrTicket: 'string',
        productId: 'any',
        code:'string',
        customerEmail: 'string',
        customerName: 'string',
        representative: 'string',
        universityOrBusiness: 'string',
        code: 'string',
        date: 'string'
    },

    session: {

    },

    derived: {
    },

    url: 'http://localhost:3000/api/usedCode'

});