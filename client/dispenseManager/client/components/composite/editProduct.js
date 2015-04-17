var React = require('react');
var EditProductForm = require('../atomic/editProductForm.js');

var EditProduct = React.createClass({

    render: function() {
        var { isbn13, title } = this.props.params.product;
        return (
            <div>
                <p>Edit Product:</p>
                <br></br>
                <p> {isbn13} </p>
                <p> {title} </p>
                <EditProductForm product={this.props.params.product} />
            </div>
        );
    }
    
});

module.exports = EditProduct;