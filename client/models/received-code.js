// receivedCode Model - received-code.js
var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({
    props: {
        id: 'any',
        date: 'string',
        code:'string'
    }
});