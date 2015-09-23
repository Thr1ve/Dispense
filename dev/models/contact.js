import AmpersandModel from 'ampersand-model'

module.exports = AmpersandModel.extend({
  props: {
    id: 'any',
    productId: 'any',
    mainEmail: 'string',
    cc: 'string',
    lastEmailed: 'string'
  },
  derived: {
    // id () {
    //   return this.productId
    // }
  }
})
