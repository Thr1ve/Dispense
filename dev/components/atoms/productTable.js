import React from 'react'
import mui from 'material-ui'
import app from 'ampersand-app'
import KeyBindings from 'react-side-effect-mousetrap'

let { Menu } = mui

let ProductTable = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  _onItemClick (e, key, menuItem) {
    let { router } = this.context
    router.transitionTo(this.props.transitionTo, {productId: menuItem.payload})
  },

  render () {
    let rows = []

    this.props.products.forEach(function (product) {
      rows.push({payload: product.productId, text: product.title + ' ' + product.nCodes, data: product.isbn13})
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
