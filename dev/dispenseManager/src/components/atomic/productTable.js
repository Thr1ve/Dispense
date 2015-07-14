import React from "react"
// import Router from "react-router"
import mui from "material-ui"
let { Menu } = mui

let ProductTable = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  render() {
    let rows = []

    this.props.products.forEach(function(product) {
      rows.push({payload: product.productId, text: product.title, data: product.isbn13})
    }.bind(this))

    return (
      <div>
        <Menu menuItems={rows} onItemClick={this._onItemClick}/>
      </div>
    )
  },

  _onItemClick(e, key, menuItem) {
    let { router } = this.context
    router.transitionTo("product", { productId: menuItem.payload})
  }
})

module.exports = ProductTable
