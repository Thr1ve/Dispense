var React  = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link, DefaultRoute } = Router;
import app from 'ampersand-app'

var mui = require('material-ui');
var AppBar = mui.AppBar;

var FilterableProductTable = require('../composite/filterableProductTable.js');

var MainSearch = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    render: function() {
        return (
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

        );
    }

});

module.exports = MainSearch;
