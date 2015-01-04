var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({
    props: {
        // id: ['any', false, this.productId],
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
    //fix for changing to  productId when separating codes from products:
    derived: {
        id : function() {
            return this.productId;
        }
        // isbn13Dashless:
        // isbn10:
        // isbn10Dashless:
    }
});