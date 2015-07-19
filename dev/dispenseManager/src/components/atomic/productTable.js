import React from 'react'
import mui from 'material-ui'
import app from 'ampersand-app'
import KeyBindings from 'react-side-effect-mousetrap'

let { Menu } = mui

var ProductTable = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  _onItemClick: function (e, key, menuItem) {
    var { router } = this.context
    router.transitionTo('product', { productId: menuItem.payload})
  },

  render: function () {
    var rows = []

    this.props.products.forEach(function (product) {
      rows.push({payload: product.productId, text: product.title, data: product.isbn13})
    })

    return (
      <KeyBindings keyMap={{
        'esc': (e) => {
          e.preventDefault()
          app.trigger('clearText')
        }
      }}>
        <div>
          <Menu menuItems={rows} onItemClick={this._onItemClick}/>
        </div>
      </KeyBindings>
    )
  }
})

module.exports = ProductTable
