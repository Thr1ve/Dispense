import AmpersandModel from 'ampersand-model'

module.exports = AmpersandModel.extend({
    props: {
        productId: 'any',
        isbn13: 'string',
        title: 'string',
        author: 'string',
        category: 'string',
        config: 'string',
        nCodes: 'number'
    },
    session: {
        selected: ['boolean', true, false]
    },

    derived: {
        id() {
            return this.productId
        },
        contact(){
            return app.contacts.get(this.productId)
        }
    }
});