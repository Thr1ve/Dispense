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
                <FilterableProductTable products={app.products}/>
                <RouteHandler/>
            </div>
        );
    }

});

module.exports = MainSearch;
