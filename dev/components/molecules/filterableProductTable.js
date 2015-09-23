import React from 'react'
import SearchField from '../atoms/searchField.js'
import ProductTable from '../atoms/productTable.js'
import MostUsedProductsTable from '../atoms/mostUsedProductsTable.js'
import app from 'ampersand-app'

var FilterableProductTable = React.createClass({

  getInitialState () {
    return {
      data: [],
      filterText: app.filterText
    }
  },

  componentDidMount () {
    var self = this

    app.on('clearText', () => {
      this.setState({filterText: ''})
    })

    // if statement added since refetching products broke app after using back button
    // this should be handled differently...perhaps store in user state?
    if (app.products.models.length > 0) {
      self.setState({data: app.products})
    } else {
      window.app.products.fetch({
        success: function (model, res) {
          self.setState({data: res})
        }
      })
    }
  },

  componentWillUnmount () {
    app.off('clearText')
  },

  handleUserInput (filterText) {
    var filtered
    if (filterText.length > 0) {
      app.products.filter(filterText)
      filtered = app.products.filtered
    } else {
      filtered = app.products
    }

    app.filterText = filterText

    this.setState({
      filterText: filterText,
      data: filtered
    })
  },

  render () {
    console.log(app.products.filtered)
    return (
      <div>
        <div style={{position: 'fixed', top: '0', left: '0', zIndex: '9'}} >
          <SearchField
            filterText={this.state.filterText}
            onUserInput={this.handleUserInput}/>
        </div>
        <div>
          {(this.state.filterText.length > 0) ?
            (<ProductTable transitionTo={this.props.transitionTo} products={this.state.data}/>) : (<MostUsedProductsTable transitionTo={this.props.transitionTo}/>) }
        </div>
      </div>
    )
  }
})

module.exports = FilterableProductTable
