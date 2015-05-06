var React = require('react');

var Mui = require('material-ui');
var TextField = Mui.TextField;

var SearchField = React.createClass({

    handleChange: function() {
        this.props.onUserInput(
            this.refs.filterTextInput.getValue()
        );
    },

    render: function() {
        return (
            <TextField
                style={{height:'50px', top:'0'}}
                type="text"
                placeholder="Search..."
                value={this.props.filterText}
                ref="filterTextInput"
                onChange={this.handleChange} />
        );
    }

});

module.exports = SearchField;