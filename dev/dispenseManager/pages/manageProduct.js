import app from 'ampersand-app'
import React from 'react'
import Router from 'react-router'
let { RouteHandler } = Router

import Mui from 'material-ui'
var { FlatButton } = Mui

// var log = require('bows')('manageProduct.js')

let ManageProduct = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

	getInitialState () {
    return {
      productId: this.props.params.productId,
      contact: null,
      product: null
    }
  },

  componentDidMount () {
    let self = this
    app.contacts.getOrFetch(self.props.params.productId,
      {all: true},
      function (err, contact) {
        if (err) {
          console.error('contact not found', err)
        }
        self.setState({contact: contact})
      }
    )
    app.products.getOrFetch(self.props.params.productId,
      {all: true},
      function (err, model) {
        if (err) {
          console.error('model not found', err)
        }
        self.setState({product: model})
      }
    )
  },

  toEditProduct () {
    let { productId } = this.state
    let { router } = this.context
    router.transitionTo('editProduct', {productId: productId})
  },

  toAddCodes () {
    let { productId } = this.state
    let { router } = this.context
    router.transitionTo('addCodes', {productId: productId})
  },

  render () {

    let buttonStyle = {
      height: '50',
      opacity: '0.9',
      float: 'right'
    }

    if (this.state.product && this.state.contact) {
      return (
        <div>
          <div style={{position: 'fixed', top: '0', left: '0', zIndex: '9' }} >
            <FlatButton label='Edit Product'
              style={buttonStyle}
              onClick={this.toEditProduct}
              secondary={true} />
            <FlatButton label='Add Codes'
              style={buttonStyle}
              onClick={this.toAddCodes}
              secondary={true} />
          </div>
          <RouteHandler {...this.state}/>
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
