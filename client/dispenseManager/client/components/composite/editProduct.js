var React = require('react');

var EditProduct = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    render: function() {
    	console.log(this);
        return (
        	<div>
	        	<p>Edit Product</p>
	        	<p> {this.context.router.getCurrentParams().productId} </p>
	        </div>
        );
    }

});

module.exports = EditProduct;