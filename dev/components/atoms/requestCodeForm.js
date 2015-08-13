import React from 'react'
import app from 'ampersand-app'

import Mui from 'material-ui'
var { TextField, FlatButton, Paper, Snackbar } = Mui

var requestCodeForm = React.createClass({

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
    var newState = this.state
    newState[event.target.name] = event.target.value
    this.setState(newState)
    app.requestData = newState
  },

  handleSubmit (e) {
    e.preventDefault()
    var { router } = this.context
    let self = this
    app.newCode.create({
      customerName: this.refs.customerName.props.value,
      customerEmail: this.refs.customerEmail.props.value,
      universityOrBusiness: this.refs.universityOrBusiness.props.value,
      representative: this.refs.representative.props.value,
      chatOrTicket: this.refs.chatOrTicket.props.value,
      productId: this.props.productId
    }, {
      wait: true,
      success (model) {
        if (!model.code) {
          self.refs.snackbar.show()
        } else {
          app.requestData.customerName = ''
          app.requestData.customerEmail = ''
          app.requestData.universityOrBusiness = ''
          app.requestData.representative = ''
          app.requestData.chatOrTicket = ''
          router.transitionTo('requestedCodes')
        }
      }
    })
  },

  render () {

    let textFieldStyle = {
      display: 'block'
    }

    var formStyle = {
      width: '40%',
      padding: '20'
    }

    var customerName = this.state.customerName
    var customerEmail = this.state.customerEmail
    var universityOrBusiness = this.state.universityOrBusiness
    var representative = this.state.representative
    var chatOrTicket = this.state.chatOrTicket

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
          <FlatButton label='Submit'/>
        </form>
        <Snackbar
          ref="snackbar"
          message="No codes remaining for this product."/>
      </Paper>
    )
  }

})

module.exports = requestCodeForm
