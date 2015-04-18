/**
 * Created by Fiction on 4/16/2015.
 */
var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link, DefaultRoute } = Router;

var log = require('bows')("manageProduct.js");

var ManageProduct = React.createClass({

	getInitialState: function() {
        log('getInitialState', this.props);
        return {
            productId: this.props.params.productId,
        };
    },

    componentDidMount: function() {
        var self = this;
        window.app.products.getOrFetch(this.props.params.productId,
            {all: true}, 
            function(err, model){
                if(err){
                    console.error('model not found', err);
                }
                self.setState({product:model});
        });
    },

    render: function() {
        log('render', this.state);
    	var { productId } = this.state;
        if(this.state.product){
            log('Product found');
        	return (
    	        <div>
    		        <div style={{position:'fixed', top:'0', right: '0', zIndex: '9' }} >
    			        	<Link to='editProduct' params={{productId:productId}}>Edit Product</Link>
    			        	<Link to='addCodes' params={{productId:productId}}>Add Codes</Link>
                            <Link to='productStats' params={{productId:productId}}>Product Stats</Link>
    		        </div>
    	            <RouteHandler  {...this.state}/>
    	        </div>
        	)
        }
        else{
            log('Product not yet found');
            return (
                <div>
                    LOADING PRODUCT...
                </div>       
            ) 
        }
    }

});

module.exports = ManageProduct;