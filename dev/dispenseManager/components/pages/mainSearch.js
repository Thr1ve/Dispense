import React from'react'
import Router from'react-router'
import app from 'ampersand-app'
var { RouteHandler } = Router

import FilterableProductTable from '../composite/filterableProductTable.js'

// var log = require('bows')('mainSearch.js')

let MainSearch = React.createClass({

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
          <FilterableProductTable toggleNav={this.props.toggleNav} products={app.products}/>
          <RouteHandler {...this.props}/>
        </div>
      </div>
    )
  }

})

module.exports = MainSearch
