import sortBy from 'amp-sort-by'
import React from 'react'
import SearchField from '../atoms/searchField.js'
import app from 'ampersand-app'
import Fuse from'fuse.js'
import mui from 'material-ui'

let { Menu } = mui

var FilterableProductTable = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState () {
    return {
      data: [],
      filterText: app.filterText
    }
  },

  handleUserInput (filterText) {
    var filtered = this.filter(filterText, this.props.products)
    app.filterText = filterText

    this.setState({
      filterText: filterText,
      data: filtered
    })
  },

  _click (e, key, menuItem) {
    let { router } = this.context
    router.transitionTo(this.props.transitionTo, {productId: menuItem.route, data: menuItem.data})
  },

  filter (string, models) {
    let fuse = new Fuse(models, {
      keys: ['isbn13', 'title'],
      threshold: 0.35,
      distance: 250
    })

    return fuse.search(string)
  },

  render () {
    let displayedProducts, rows

    if (this.state.filterText.length > 0) {
      displayedProducts = this.state.data
    } else {
      displayedProducts = sortBy(this.props.products, 'popularity').filter((val) => {
        return val.popularity > 0
      }).reverse()
    }

    rows = displayedProducts.map(function (product) {
      return {
        id: product.id,
        route: product.productId,
        text: product.title,
        data: product.isbn13,
        number: product.nCodes.toString()
      }
    })

    return (
      <div>
        <div style={{position: 'fixed', top: '0', left: '0', zIndex: '9'}} >
          <SearchField
            filterText={this.state.filterText}
            onUserInput={this.handleUserInput}/>
        </div>
        <div>
          <Menu
            menuItems={rows}
            onItemTap={this._click}/>
        </div>
      </div>
    )
  }
})

module.exports = FilterableProductTable
