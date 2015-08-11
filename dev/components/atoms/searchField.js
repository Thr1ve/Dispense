import React from 'react'
import Mui from 'material-ui'

let { TextField } = Mui

let SearchField = React.createClass({

  handleChange () {
    this.props.onUserInput(
      this.refs.filterTextInput.getValue()
    )
  },

  handleBlur () {
    this.refs.filterTextInput.focus()
  },

  // this should be handled automatically
  // remove once https://github.com/callemall/material-ui/issues/1066 is resolved ?
  handleFocus () {
    let input = document.getElementsByTagName('input')[0]
    let length = this.refs.filterTextInput.getValue().length
    input.setSelectionRange(length, length)
  },

  componentDidMount () {
    // add mousetrap as class to the input so we can use keybinds in the input field
    let input = document.getElementsByTagName('input')
    input[0].className = 'mousetrap searchField'

    this.refs.filterTextInput.focus()
  },

  render () {
    return (
      <TextField
        className='mousetrap'
        style={{height: '50px', top: '0'}}
        type='text'
        placeholder='Search...'
        value={this.props.filterText}
        ref='filterTextInput'
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}/>
    )
  }
})

module.exports = SearchField
