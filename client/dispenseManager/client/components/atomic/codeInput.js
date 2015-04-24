var React = require('react');

var Mui = require('material-ui');
var TextField = Mui.TextField;

var log = require('bows')("codeInput.js");

var CodeInput = React.createClass({

    handleChange: function() {
        this.props.onUserInput(
            this.refs.codesString.getValue()
        );
    },

    render: function() {
        return (
        	<TextField
                type="text"
                placeholder="Add Codes..."
                multiLine={true}
                value={this.props.codesString}
                ref="codesString"
                onChange={this.handleChange} />
        );
    }

});

module.exports = CodeInput;