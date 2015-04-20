var React = require('react');

var log = require('bows')("codeInput.js");

var CodeInput = React.createClass({

    render: function() {
        console.log(this.props);
        return (
            <div>
                Code Input
            </div>
        );
    }

});

module.exports = CodeInput;
