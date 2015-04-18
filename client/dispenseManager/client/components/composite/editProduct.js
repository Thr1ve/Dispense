var React = require('react');
var EditProductForm = require('../atomic/editProductForm.js');

var log = require('bows')("editProduct.js");

var EditProduct = React.createClass({

    render: function() {
        log('render', this.props);
        var { isbn13, title } = this.props.product;
        return (
            <div>
                <p>Edit Product:</p>
                <br></br>
                <p> {isbn13} </p>
                <p> {title} </p>
                <EditProductForm {...this.props} />
            </div>
        );
    }
    
});

module.exports = EditProduct;