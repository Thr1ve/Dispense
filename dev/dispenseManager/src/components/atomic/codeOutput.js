import React from 'react'

import Mui from 'material-ui'
let { FlatButton } = Mui

let CodeOutput= React.createClass({

	format(input) {
        let formatted = input
			//separate by newline
			.split('\n')
            //remove empty/null/undefined values from array
            .filter(function(e){return e;})

        let trimmed = formatted.map(function(val){
        	return val.trim()
        })

        return trimmed
    },

    handleSubmit(){
    	let codes = this.format(this.props.codesString)
        this.props.onUserSubmit(codes) 
    },

    render() {
        if(this.props.codesString){
	        let codes = this.format(this.props.codesString).map(function(val, ind, arr){
	        	return (
	        		<li key={ind}> {val}</li>
	        	)
	        })
	        return (
	            <div style={{marginRight:'50px'}}>
	                <FlatButton 
                        onClick={this.handleSubmit} 
                        label='Submit'/>
	                <ul style={{display:'block'}}>
		                {codes}
	                </ul>
	            </div>
	        )
        }
        else{
        	return (
        		<p>Waiting for codes...</p>
        	)
        }
    }

})

module.exports = CodeOutput
