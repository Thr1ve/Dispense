import AmpersandModel from 'ampersand-model'

module.exports = AmpersandModel.extend({
  props: {
    productId: 'any',
    mainEmail: 'string',
    cc: 'string',
    lastEmailed: 'string'
  },
  derived: {
    id () {
      return this.productId
    }
  }
})
