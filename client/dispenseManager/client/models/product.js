var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({
    props: {
        productId: 'any',
        isbn13: 'string',
        title: 'string',
        author: 'string',
        category: 'string',
        config: 'string'
    },
    session: {
        selected: ['boolean', true, false]
    },

    derived: {
        id : function() {
            return this.productId;
        }
    }
});