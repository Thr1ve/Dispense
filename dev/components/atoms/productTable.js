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
    console.log('MENU ITEM CLICKED')
    console.log(e)
    console.log('target', e.target)
    console.log('type', e.type)
    let { router } = this.context
    router.transitionTo(this.props.transitionTo + '/' + menuItem.route, {productId: menuItem.route})
  },

  render () {
    let rows = []

    console.log(this.props.transitionTo)

    this.props.products.forEach(function (product) {
      rows.push({route: product.productId, text: product.title + ' ' + product.nCodes, data: product.isbn13})
    })

    return (
      <KeyBindings keyMap={{
        'esc': (e) => {
          e.preventDefault()
          app.trigger('clearText')
        }
      }}>
        <div>
          <Menu menuItems={rows} onClick={this._click}/>
        </div>
      </KeyBindings>
    )
  }
})

module.exports = ProductTable
