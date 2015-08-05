import AmpersandModel from 'ampersand-model'

module.exports = AmpersandModel.extend({

  props: {
    productId: 'any',
    code: 'string'
  },

  session: {

  },

  derived: {
    id () {
      return this.productId
    }
  },

  url: 'http://localhost:3000/api/availableCodes'

})
