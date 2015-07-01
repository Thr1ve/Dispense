import React from 'react'
import Router from 'react-router'
import app from 'ampersand-app'
import FilterableProductTable from '../composite/filterableProductTable.js'
import Mui from 'material-ui'

import KeyBindings from '../atomic/keyBindings.js'

let { Route, RouteHandler, Link, DefaultRoute } = Router;
let { AppBar } = Mui

var MainSearch = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    render() {
      return (
        <KeyBindings keyMap={{location : 'Main Search'}}>
          <div>
            <header style={{
              position:'fixed',
              top:'0', left: '0',
              width: '100%', height:'50px',
              opacity: '0.8', backgroundColor: 'white',
              zIndex: '4' }} >
            </header>
            <div>
                <FilterableProductTable products={app.products}/>
                <RouteHandler/>
            </div>
          </div>
        </KeyBindings>
      );
    }

});

module.exports = MainSearch;
