import React from 'react'
import SearchField from './../atomic/searchField.js'
import ProductTable from './../atomic/productTable.js'
import app from 'ampersand-app'

var FilterableProductTable = React.createClass({

  getInitialState () {
    return {
      data: [],
      filterText: ''
    }
  },

  componentDidMount () {
    var self = this
    // if statement added since refetching products broke app after using back button //this should be handled differently...perhaps store in user state?
    if (app.products.models.length > 0) {
      self.setState({data: app.products})
    } else {
      window.app.products.fetch({
        success: function (model, res) {
          self.setState({data: res})
        }
      }), []
    }
  },

  handleUserInput (filterText) {
    var filtered
    if (filterText) {
      app.products.filter(filterText)
      filtered = app.products.filtered
    } else {
      filtered = app.products
    }

    this.setState({
      filterText: filterText,
      data: filtered
    })
  },

  render () {
    return (
      <div>
        <div style={{position: 'fixed', top: '0', left: '0', zIndex: '9' }} >
          <SearchField
            filterText={this.state.filterText}
            onUserInput={this.handleUserInput}/>
        </div>
        <div>
          <ProductTable
            products={this.state.data}/>
        </div>
      </div>
    )
  }
})

module.exports = FilterableProductTable
