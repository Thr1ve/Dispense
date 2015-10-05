import React from 'react'
import app from 'ampersand-app'

let request = require('superagent')

import Mui from 'material-ui'
let { TextField, FlatButton, Paper, Snackbar } = Mui

let requestCodeForm = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState () {
    return {
      productId: this.props.productId,
      customerName: app.requestData.customerName,
      customerEmail: app.requestData.customerEmail,
      universityOrBusiness: app.requestData.universityOrBusiness,
      representative: app.requestData.representative,
      chatOrTicket: app.requestData.chatOrTicket
    }
  },

  handleChange (event) {
    let newState = this.state
    newState[event.target.name] = event.target.value
    this.setState(newState)
    app.requestData = newState
  },

  handleSubmit (e) {
    e.preventDefault()
    // change the submit button's state here so people can't accidentally double click and request 2 codes?

    let self = this

    let { router } = this.context

    let { customerName, customerEmail, universityOrBusiness, representative, chatOrTicket } = this.refs

    let codeRequest = {
      customerName: customerName.props.value,
      customerEmail: customerEmail.props.value,
      universityOrBusiness: universityOrBusiness.props.value,
      representative: representative.props.value,
      chatOrTicket: chatOrTicket.props.value,
      productId: this.props.productId
    }

    request
      .post('http://localhost:5000/api/requestCode')
      .send(codeRequest)
      .end(function (err, res) {
        if (err) {throw err}

        if (res.body) {
          app.requestedCodes.push(res.body)

          app.requestData.customerName = ''
          app.requestData.customerEmail = ''
          app.requestData.universityOrBusiness = ''
          app.requestData.representative = ''
          app.requestData.chatOrTicket = ''

          router.transitionTo('requestedCodes')
        } else {
          self.refs.snackbar.show()
        }
      })
  },

  render () {

    let textFieldStyle = {
      display: 'block'
    }

    let formStyle = {
      width: '40%',
      padding: '20'
    }

    let customerName = this.state.customerName
    let customerEmail = this.state.customerEmail
    let universityOrBusiness = this.state.universityOrBusiness
    let representative = this.state.representative
    let chatOrTicket = this.state.chatOrTicket

    return (
      <Paper zDepth={2} style={{width: '95%', marginTop: '30', marginRight: 'auto', marginLeft: 'auto'}}>
        <form style={formStyle} onSubmit={this.handleSubmit}>
          <div style={textFieldStyle}>
            <TextField
              type='text'
              name='customerName'
              ref='customerName'
              floatingLabelText='Customer Name'
              value={customerName}
              onChange={this.handleChange}/>
          </div>
          <div style={textFieldStyle}>
            <TextField style={textFieldStyle}
              type='text'
              name='customerEmail'
              ref='customerEmail'
              floatingLabelText='Customer Email Address'
              value={customerEmail}
              onChange={this.handleChange}/>
          </div>
          <div style={textFieldStyle}>
            <TextField style={textFieldStyle}
              type='text'
              name='universityOrBusiness'
              ref='universityOrBusiness'
              floatingLabelText='University or Business'
              value={universityOrBusiness}
              onChange={this.handleChange}/>
          </div>
          <div style={textFieldStyle}>
            <TextField style={textFieldStyle}
              type='text'
              name='chatOrTicket'
              ref='chatOrTicket'
              floatingLabelText='Chat or Ticket Number'
              value={chatOrTicket}
              onChange={this.handleChange}/>
          </div>
          <div style={textFieldStyle}>
            <TextField style={textFieldStyle}
              type='text'
              name='representative'
              ref='representative'
              /* errorText={'this field is required'} */
              floatingLabelText='Representative'
              value={representative}
              onChange={this.handleChange}/>
          </div>
          <FlatButton label='Submit' type='submit'/>
        </form>
        <Snackbar
          ref="snackbar"
          message="No codes remaining for this product."/>
      </Paper>
    )
  }

})

module.exports = requestCodeForm
