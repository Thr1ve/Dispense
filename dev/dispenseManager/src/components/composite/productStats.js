var React = require('react');

var log = require('bows')("productStats.js");

var ProductStats = React.createClass({

    render: function() {
        var { isbn13, title } = this.props.product;
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