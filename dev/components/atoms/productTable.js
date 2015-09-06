import React from 'react'
import mui from 'material-ui'
import app from 'ampersand-app'
import KeyBindings from 'react-side-effect-mousetrap'

let { Menu } = mui

let ProductTable = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  _click (e, key, menuItem) {
    let { router } = this.context
    router.transitionTo(this.props.transitionTo, {productId: menuItem.route})
  },

  render () {
    let rows = []

    this.props.products.forEach(function (product) {
      rows.push({
        route: product.productId,
        text: product.title,
        data: product.isbn13,
        number: product.nCodes.toString()
      })
    })

    return (
      <KeyBindings keyMap={{
        'esc': (e) => {
          e.preventDefault()
          app.trigger('clearText')
        }
      }}>
        <div>
          <Menu
            menuItems={rows}
            onItemTap={this._click}/>
        </div>
      </KeyBindings>
    )
  }
})

module.exports = ProductTable
