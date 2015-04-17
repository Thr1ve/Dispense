var React = require('react');

var AddCodes = React.createClass({

    render: function() {
        var { isbn13, title } = this.props.params.product;
        return (
            <div>
                <p>Add Codes:</p>
                <br></br>
                <p> {isbn13} </p>
                <p> {title} </p>
            </div>
        );
    }

});

module.exports = AddCodes;