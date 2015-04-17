/**
 * Created by Fiction on 4/16/2015.
 */
var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link, DefaultRoute } = Router;

var ManageProduct = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    render: function() {
        {/* Add navigation to fixed header here */}
        <div>
            <RouteHandler/>
        </div>
    }

});

module.exports = ManageProduct;