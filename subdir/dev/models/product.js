let AmpersandModel = require('ampersand-model')
import app from 'ampersand-app'

// this is where we define what attributes we want available for each product
// we'll create as many of these as needed for each individual product and store them in
// our collection 'products.js'

module.exports = AmpersandModel.extend({

  props: {
    productId: 'any',
    isbn13: 'string',
    title: 'string',
    author: 'string',
    category: 'string',
    config: 'string',
    popularity: 'number'
  },

  session: {
    selected: ['boolean', true, false]
  },

  derived: {
    id: function () {
      return this.productId
    },
    contact () {
      return app.contacts.get(this.productId)
    }
    // isbn13Dashless:
    // isbn10:
    // isbn10Dashless:
  }
})
