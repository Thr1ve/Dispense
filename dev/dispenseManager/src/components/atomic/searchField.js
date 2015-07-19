import React from 'react'
import Mui from 'material-ui'

let { TextField } = Mui

var SearchField = React.createClass({

  handleChange () {
    this.props.onUserInput(
      this.refs.filterTextInput.getValue()
    )
  },

  render () {
    return (
      <TextField
        type='text'
        placeholder='Search...'
        value={this.props.filterText}
        ref='filterTextInput'
        onChange={this.handleChange} />
    )
  }
})

module.exports = SearchField
