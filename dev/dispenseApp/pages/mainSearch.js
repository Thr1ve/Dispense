import React from 'react'
import Router from 'react-router'
import FilterableProductTable from '../../components/molecules/filterableProductTable.js'

let ReactRethinkdb = require('react-rethinkdb')
let r = ReactRethinkdb.r

let { RouteHandler } = Router

var MainSearch = React.createClass({

  mixins: [ReactRethinkdb.DefaultMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState () {
    return {
      products: {}
    }
  },

  observe (props, state) {
    return {
      products: new ReactRethinkdb.QueryRequest({
        query: r.table('product'),
        changes: true,
        initial: []
      })
    }
  },

  render () {

    let products = this.data.products.value()

    return (
      <div>
        <header style={{
          position: 'fixed',
          top: '0', left: '0',
          width: '100%', height: '50px',
          opacity: '0.8', backgroundColor: 'white',
          zIndex: '4'}}>
        </header>
        <div>
          <FilterableProductTable transitionTo='requestCode' toggleNav={this.props.toggleNav} products={products}/>
          <RouteHandler/>
        </div>
      </div>
    )
  }
})

module.exports = MainSearch
