var React = require('react');

var ProductStats = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    render: function() {
    	console.log(this);
        return (
        	<div>
	        	<p>Product Stats</p>
	        	<p> {this.context.router.getCurrentParams().productId} </p>
	        </div>
        );
    }

});

module.exports = ProductStats;