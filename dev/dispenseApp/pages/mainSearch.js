import React from 'react'
import Router from 'react-router'
import app from 'ampersand-app'
import FilterableProductTable from '../../components/molecules/filterableProductTable.js'

let { RouteHandler } = Router

var MainSearch = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState () {
    return {
      products: {}
    }
  },

  componentDidMount () {
    app.products.on('change', (model, val) => {
      // currently useless...I think I should pass down the products as state instead
      // of referencing app.products in deeper components...
      // this means possibly restructuring where the filtered array resides
      this.setState({products: app.products})
    })
  },

  componentWillUnmount () {
    app.off('all')
  },

  render () {
    return (
      <div>
        <header style={{
          position: 'fixed',
          top: '0', left: '0',
          width: '100%', height: '50px',
          opacity: '0.8', backgroundColor: 'white',
          zIndex: '4' }} >
        </header>
        <div>
          <FilterableProductTable transitionTo='requestCode' toggleNav={this.props.toggleNav} products={app.products}/>
          <RouteHandler/>
        </div>
      </div>
    )
  }
})

module.exports = MainSearch
