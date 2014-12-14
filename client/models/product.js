var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({
    props: {
        id: 'any',
        isbn13: 'string',
        title: 'string'
    },
    session: {
        selected: ['boolean', true, false]
    }
    // derived: {
    //     isbn13Dashless:
    //     isbn10:
    //     isbn10Dashless:
    // }
});