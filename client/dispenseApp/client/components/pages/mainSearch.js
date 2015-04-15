var React  = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link, DefaultRoute } = Router;

var FilterableProductTable = require('../filterableProductTable.js');

var MainSearch = React.createClass({

    render: function() {
        return (
            <div>
                <FilterableProductTable products={window.app.products}/>
                <RouteHandler/>
            </div> 
        );
    }

});

module.exports = MainSearch;
