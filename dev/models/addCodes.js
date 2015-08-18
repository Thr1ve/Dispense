/* global env */
import AmpersandModel from 'ampersand-model'

module.exports = AmpersandModel.extend({

  location: 'availableCodes-collection/addCodes',

  pointer: env.vars,

  initialize () {
    this.url = this.pointer + this.location
  },

  props: {
    productId: 'any',
    codes: 'array'
  },

  session: {},

  derived: {
    id () {
      return this.productId
    }
  }
})
