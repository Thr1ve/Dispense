var React = require('react');

var ProductStats = React.createClass({

    render: function() {
        var { isbn13, title } = this.props.params.product;
        return (
        	<div>
	        	<p>Product Stats:</p>
                <br></br>
	        	<p> {isbn13} </p>
                <p> {title} </p>
	        </div>
        );
    }

});

module.exports = ProductStats;