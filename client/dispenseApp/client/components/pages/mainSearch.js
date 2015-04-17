var React  = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link, DefaultRoute } = Router;

var mui = require('material-ui');
var FlatButton = mui.FlatButton

var FilterableProductTable = require('../filterableProductTable.js');

var MainSearch = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

	toRequestedCodes: function() {
        var { router } = this.context;
        router.transitionTo('requestedCodes');
	},

    render: function() {
        return (
            <div>
            	<FlatButton label='Requested Codes' onClick={this.toRequestedCodes}/>
                <FilterableProductTable products={window.app.products}/>
                <RouteHandler/>
            </div> 
        );
    }

});

module.exports = MainSearch;
