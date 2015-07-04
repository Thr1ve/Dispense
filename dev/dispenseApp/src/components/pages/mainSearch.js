import React from 'react'
import Router from 'react-router'
import app from 'ampersand-app'
import FilterableProductTable from '../composite/filterableProductTable.js'
import Mui from 'material-ui'

import Keybindings from 'react-side-effect-mousetrap'

let { Route, RouteHandler, Link, DefaultRoute } = Router;
let { AppBar } = Mui

var MainSearch = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    render() {
      return (
        <Keybindings keyMap={{
            'esc': (e) => {
              e.preventDefault()
              let input = document.getElementsByClassName('searchField')
              if(input[0].value.length > 0){
                app.trigger('clearText')
              }
              else{
                this.props.toggleNav()
              }
            }
          }}>
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
        </Keybindings>
      );
    }
});

module.exports = MainSearch;
