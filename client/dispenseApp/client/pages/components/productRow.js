var React = require('react');

var prStyle = {
    listStyle:'none', 
    height:'72px',
    paddingLeft: '16px',
    paddingTop: '20px', 
    paddingBottom: '20px'
}

var ProductRow = React.createClass({
    render: function() {
        return (
            <div>
                <li style={prStyle}> 
                    {this.props.product.title} 
                    <br/>
                    {this.props.product.isbn13}
                </li>
            </div>
        );
    }
});

module.exports = ProductRow;