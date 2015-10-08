import React from 'react'
import CodeInput from '../atoms/codeInput.js'
import CodeOutput from '../atoms/codeOutput'

import Mui from 'material-ui'
let { Paper, Snackbar } = Mui

let ReactRethinkdb = require('react-rethinkdb')
let r = ReactRethinkdb.r

let AddCodes = React.createClass({

  getInitialState () {
    return {
      formattedCodes: []
    }
  },

  handleUserInput (string) {
    let formatted = this.format(string)
    this.setState({
      formattedCodes: formatted
    })
  },

  format (input) {
    let formatted = input
      // separate by newline
      .split('\n')
      // remove empty/null/undefined values from array
      .filter(function (e) {return e})
    let trimmed = formatted.map(function (val) {
      return val.trim()
    })
    return trimmed
  },

  submit () {
    // TODO: make submit button inactive after click until we return sucess or error to prevent accidental double-click
    let codes = this.state.formattedCodes.map((code) => {
      return {
        code: code,
        productId: this.props.product.productId
      }
    })
    let addCodesQuery = r.table('availableCodes').insert(codes)

    ReactRethinkdb.DefaultSession.runQuery(addCodesQuery)
    .catch((err) => {
      console.log(err)
      this.notifyError()
    })
    .then((val) => {
      this.notifySuccess()
    })
  },

  notifySuccess () {
    this.refs.successSnackbar.show()
  },

  notifyError () {
    this.refs.errorSnackbar.show()
  },

  render () {
    let { isbn13, title } = this.props.product
    return (
      <div>
        <Paper zDepth={2} style={{width: '95%', marginRight: 'auto', marginLeft: 'auto'}}>
          <h2 className='mui-font-style-headline' style={{textAlign: 'center', padding: 5}}>Add Codes for: {title}</h2>
          <h4 style={{textAlign: 'center'}}>{isbn13}</h4>
        </Paper>
        <CodeInput
          onUserInput={this.handleUserInput}/>
        <CodeOutput
          codes={this.state.formattedCodes}
          submit={this.submit}/>
        <Snackbar
          ref='successSnackbar'
          message='Codes added!'/>
        <Snackbar
          ref='errorSnackbar'
          message='ERROR! No Codes Added.'/>
      </div>
    )
  }
})

module.exports = AddCodes
