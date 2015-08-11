import React from 'react'
import Mui from 'material-ui'
let { TextField, Paper } = Mui

/*

    TextField currently scrolls to the bottom of the input when you paste anything into it.
    From what I can see, this is fixed in next release. Leaving as is for now.

    Also, floatingLabelText is buggy here too and floats back into text area on blur even
    if there is content...this is fixed in next release.

 */

let CodeInput = React.createClass({

  handleChange () {
    this.props.onUserInput(
      this.refs.codesString.getValue()
    )
  },

  render () {
    return (
      <Paper zDepth={2} style={{width: '25%', marginTop: '10', marginLeft: '10', float: 'left'}}>
        <div style={{padding: 30, minHeight: 450}}>
          <TextField
            type='text'
            floatingLabelText='Add Codes...'
            multiLine={true}
            value={this.props.codesString}
            ref='codesString'
            onChange={this.handleChange} />
        </div>
      </Paper>
    )
  }
})

module.exports = CodeInput
