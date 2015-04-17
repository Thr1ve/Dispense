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

	getInitialState: function() {
        return {
            data: {}
        };
    },

    componentDidMount: function() {
        var self = this;
            window.app.products.getOrFetch(this.context.router.getCurrentParams().productId,
                {all: true}, 
                function(err, model){
                    if(err){
                        console.error('model not found', err);
                    }
                    self.setState({data:model});
            });
    },

    render: function() {
    	var productId = this.context.router.getCurrentParams().productId;
    	this.props.params.product = this.state.data;
    	return (
	        <div>
		        <div style={{position:'fixed', top:'0', right: '0', zIndex: '9' }} >
			        	<Link to='editProduct' params={{productId:productId}}>Edit Product</Link>
			        	<Link to='addCodes' params={{productId:productId}}>Add Codes</Link>
                        <Link to='productStats' params={{productId:productId}}>Product Stats</Link>
		        </div>
	            <RouteHandler  {...this.props}/>
	        </div>
    	)
    }

});

module.exports = ManageProduct;