// receivedCode Model - received-code.js
var AmpersandModel = require('ampersand-model');

//RENAME TO REQUEST?
module.exports = AmpersandModel.extend({
    props: {
        id: 'any',
        customerName: 'string',
        customerEmail: 'string',
        university: 'string',
        representative: 'string',
        chatOrTicket: 'string',
        date: 'string',
        code:'string'
    }

});