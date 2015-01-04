// receivedCode Model - received-code.js
var AmpersandModel = require('ampersand-model');

//RENAME TO REQUEST?
module.exports = AmpersandModel.extend({
    props: {
        productId: 'any',
        customerName: 'string',
        customerEmail: 'string',
        university: 'string',
        representative: 'string',
        chatOrTicket: 'string',
        date: 'string',
        code:'string'
    }

});