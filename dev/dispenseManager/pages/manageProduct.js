import React from 'react'
import Router from 'react-router'
let { RouteHandler } = Router

import Mui from 'material-ui'
let { FlatButton } = Mui

import {r, DefaultMixin, QueryRequest} from 'react-rethinkdb'

let ManageProduct = React.createClass({

  mixins: [DefaultMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  observe (props, state) {

    // Turn our route into a number ( can't query with string )
    let prodId = parseInt(this.context.router.getCurrentParams().productId, 10)

    // Get the product from the server
    return {
      product: new QueryRequest({
        query: r.table('products').filter({productId: prodId}),
        initial: []
      }),
    // Get the contact from the server
      contact: new QueryRequest({
        query: r.table('contacts').filter({productId: prodId}),
        initial: []
      })
    }
  },

  toEditProduct () {
    let { productId } = this.data.product._value[0]
    let { router } = this.context
    router.transitionTo('editProduct', {productId: productId})
  },

  toAddCodes () {
    let { productId } = this.data.product._value[0]
    let { router } = this.context
    router.transitionTo('addCodes', {productId: productId})
  },

  render () {

    let data = {}

    let buttonStyle = {
      height: '50',
      opacity: '0.9',
      float: 'right'
    }

    if (this.data.product && this.data.product._value.length > 0) {
      data.product = this.data.product._value[0]
      data.contact = this.data.contact._value[0]
    } else {
      data.product = {}
      data.contact = {}
    }

    // if we don't have the product yet, nothing but "loading product" should be rendered
    if (data.product && data.contact) {
      return (
        <div>
          <div style={{position: 'fixed', top: '0', left: '0', zIndex: '9'}} >
            <FlatButton label='Edit Product'
              style={buttonStyle}
              onClick={this.toEditProduct}
              secondary={true} />
            <FlatButton label='Add Codes'
              style={buttonStyle}
              onClick={this.toAddCodes}
              secondary={true} />
          </div>
          <RouteHandler {...data}/>
        </div>
      )
    } else {
      return (
        <div>
          LOADING PRODUCT...
        </div>
      )
    }
  }
})

module.exports = ManageProduct
