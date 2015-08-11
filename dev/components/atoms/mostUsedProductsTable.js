import React from 'react'
import mui from 'material-ui'
import app from 'ampersand-app'

import sortBy from 'amp-sort-by'

let { Menu } = mui

let MostUsedProductsTable = React.createClass({

  contextTypes: {
      router: React.PropTypes.func
  },

  getInitialState () {
    return {
      data: []
    }
  },

  componentDidMount () {
    if (app.products) {
      this.setState({data: app.products})
    }
  },

  _onItemClick (e, key, menuItem) {
    let { router } = this.context
    router.transitionTo(this.props.transitionTo, { productId: menuItem.payload})
  },

  render () {
    let rows = []
    let sorted = sortBy(this.state.data.models, 'popularity').filter((val)=> {
      return val.popularity > 0
    }).reverse()

    sorted.forEach(function (product) {
      rows.push({payload: product.productId, text: product.title, data: product.isbn13})
    })

    return (
      <div>
        <div> Most Used Codes...</div>
        <Menu menuItems={rows} onItemClick={this._onItemClick}/>
      </div>
    )
  }

})

module.exports = MostUsedProductsTable
