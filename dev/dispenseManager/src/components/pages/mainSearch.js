import React from"react"
import Router from"react-router"
import app from "ampersand-app"
var { RouteHandler } = Router

import Mui from "material-ui"
let { FlatButton } = Mui

import FilterableProductTable from "../composite/filterableProductTable.js"

// var log = require("bows")("mainSearch.js")

let MainSearch = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  render() {
    return (
      <div>
        <FilterableProductTable products={app.products}/>
        <RouteHandler {...this.props}/>
      </div>
    )
  }

})

module.exports = MainSearch
