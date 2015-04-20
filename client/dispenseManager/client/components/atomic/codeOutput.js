var React = require('react');

var Mui = require('material-ui');
var FlatButton = Mui.FlatButton;

var log = require('bows')("codeOutput.js");

var CodeOutput= React.createClass({

	format: function(input) {
        var formatted = input
			//separate by newline
			.split('\n')
            //remove empty/null/undefined values from array
            .filter(function(e){return e;});
        var trimmed = formatted.map(function(val){
        	return val.trim();
        })
        return trimmed;
    },

    handleSubmit: function(){
    	var codes = this.format(this.props.codesString);
        this.props.onUserSubmit(codes); 
    },

    render: function() {
        if(this.props.codesString){
	        var codes = this.format(this.props.codesString).map(function(val, ind, arr){
	        	return (
	        		<li key={ind}> {val}</li>
	        	);
	        })
	        return (
	            <div style={{marginLeft:'50px'}}>
	                Code Output
	                <FlatButton 
                        onClick={this.handleSubmit} 
                        style={{float:'left', display:'block'}} 
                        label='Submit'/>
	                <ul style={{display:'block'}}>
		                {codes}
	                </ul>
	            </div>
	        );
        }
        else{
        	return (
        		<p>Waiting for codes...</p>
        	);
        }
    }

});

module.exports = CodeOutput;
