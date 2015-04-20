var React = require('react');

var CodeInput = require('../atomic/codeInput.js');
var CodeOutput = require('../atomic/codeOutput');

var log = require('bows')("addCodes.js");

var AddCodes = React.createClass({

    render: function() {
        console.log(this.props);
        return (
            <div>
                <p>Add Codes:</p>
                <br></br>
                <p> {this.props.title} </p>
                <p> {this.props.isbn13} </p>
                <CodeInput/>
                <CodeOutput/>
            </div>
        );
    }

});

module.exports = AddCodes;