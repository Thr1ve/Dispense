import React from 'react'
import Router from 'react-router'
import app from 'ampersand-app'
import FilterableProductTable from '../../../components/molecules/filterableProductTable.js'

let { RouteHandler } = Router

var MainSearch = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
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
