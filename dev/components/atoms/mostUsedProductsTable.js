import React from 'react'
import mui from 'material-ui'
import app from 'ampersand-app'

import sortBy from 'amp-sort-by'

let { Menu, List, ListItem } = mui

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
    console.log('MENU ITEM CLICKED')
    console.log(e)
    console.log('target', e.target)
    console.log('type', e.type)
    let { router } = this.context
    // router.transitionTo(this.props.transitionTo, {productId: menuItem.payload})
  },

  render () {
    let self = this
    console.log(this.props.transitionTo)
    let rows = []
    let sorted = sortBy(this.state.data.models, 'popularity').filter((val) => {
      return val.popularity > 0
    }).reverse()

    sorted.forEach(function (product) {
      // rows.push({payload: product.productId, text: product.title + ' ' + product.nCodes, data: product.isbn13})
      rows.push(<ListItem primaryText={product.title} onClick={self._onItemClick} key={product.productId}></ListItem>)
    })

    return (
      <div>
        <List>
          { sorted.map(function (product) {
            return (
              <ListItem
                primaryText={product.title}
                onTouchStart={this._onItemClick}
                onTouchTap={this._onItemClick}
                onClick={this._onItemClick}
                />
            )}.bind(this))}
        </List>
      </div>
    )

    // return (
    //   <div>
    //     <div> Most Used Codes...</div>
    //     <Menu menuItems={rows} onTouchTap={this._onItemClick}/>
    //   </div>
    // )
  }

})

module.exports = MostUsedProductsTable
