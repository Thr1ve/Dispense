import React from 'react'
import Mui from 'material-ui'
let { TextField } = Mui

let CodeInput = React.createClass({

    handleChange() {
        this.props.onUserInput(
            this.refs.codesString.getValue()
        )
    },

    render() {
        return (
            <div style={{float:'left'}}>
            	<TextField
                    type="text"
                    placeholder="Add Codes..."
                    multiLine={true}
                    value={this.props.codesString}
                    ref="codesString"
                    onChange={this.handleChange} />
            </div>
        )
    }

})

module.exports = CodeInput
