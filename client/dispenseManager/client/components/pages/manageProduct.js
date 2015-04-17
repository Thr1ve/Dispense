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
    	var productId = this.context.router.getCurrentParams().productId;
    	return (
	        <div>
		        <div style={{position:'fixed', top:'0', left: '0', zIndex: '9' }} >
		        	<Link name='Edit Product' to='editProduct' params={{productId:productId}}/>
		        </div>
	            <RouteHandler  />
	        </div>
    	)
    }

});

module.exports = ManageProduct;