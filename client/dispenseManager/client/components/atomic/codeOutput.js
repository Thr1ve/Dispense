var React = require('react');

var log = require('bows')("codeOutput.js");

var CodeOutput= React.createClass({

    render: function() {
        console.log(this.props);
        var testString = 'code1 \n code 2 \n code 3';
        return (
            <div>
                Code Output
            </div>
        );
    }

});

module.exports = CodeOutput;
