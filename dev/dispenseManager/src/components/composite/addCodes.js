var React = require('react');

var CodeInput = require('../atomic/codeInput.js');
var CodeOutput = require('../atomic/codeOutput');

var AddCodesRequest = require('../../models/addCodes.js');

var log = require('bows')("addCodes.js");

var AddCodes = React.createClass({

    getInitialState: function() {
        return {
            codesString: ''
        }
    },

    handleUserInput: function(string){
        this.setState({
            codesString : string
        });
    },

    handleUserSubmit: function(data){

        var self = this;
        var addCodesRequest = new AddCodesRequest();

        addCodesRequest.save({
            "productId": this.props.productId,
            "codes":data
        },
         {

            wait: true,

            isNew: true,

            success: function(model, response) {
                alert('codes added');
            },

            error: function(model, response) {
                log('error...', model, response);
            }
        });
    },

    render: function() {
        return (
            <div>
                <p>Add Codes:</p>
                <br></br>
                <p> {this.props.title} </p>
                <p> {this.props.isbn13} </p>
                <CodeInput 
                    onUserInput={this.handleUserInput}
                    filterText={this.state.codesString}/>
                <CodeOutput 
                    codesString={this.state.codesString}
                    onUserSubmit={this.handleUserSubmit}/>
            </div>
        );
    }

});

module.exports = AddCodes;