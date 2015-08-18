import React from 'react'
import app from 'ampersand-app'

import Mui from 'material-ui'
let { TextField, FlatButton, Paper, Snackbar } = Mui

let addProduct = React.createClass({

  handleSubmit (e) {
    e.preventDefault()
    let self = this
    let title = this.refs.title.getValue()
    let isbn13 = this.refs.isbn13.getValue()
    let contact = this.refs.contact.getValue()
    let productData = {
      title: title,
      isbn13: isbn13
    }
    let contactData = {
      mainEmail: contact
    }

    app.products.create(productData, {
      wait: true,
      success: function (res) {
        let productId = res.productId
        let fullContact = contactData
        fullContact.productId = productId

        app.contacts.create(fullContact, {
          wait: true,
          success: function () {
            self.success()
          }
        })
      }
    })
  },

  success () {
    this.refs.snackbar.show()
  },

  getInitialState () {
    return {
      title: '',
      isbn13: '',
      contact: ''
    }
  },

  handleChange (event) {
    let newState = this.state
    newState[event.target.name] = event.target.value
    this.setState(newState)
  },

  render () {
    let textFieldStyle = {
      display: 'block'
    }
    let formStyle = {
      padding: 20
    }
    return (
      <div>
        <Paper zDepth={3} style={{width: '85%', marginRight: 'auto', marginLeft: 'auto'}}>
          <form style = {formStyle} onSubmit={this.handleSubmit}>
            <div style={textFieldStyle}>
              <TextField
                type='text'
                name='title'
                ref='title'
                floatingLabelText='Title'
                onChange={this.handleChange}/>
            </div>
            <div style={textFieldStyle}>
              <TextField
                type='text'
                name='isbn13'
                ref='isbn13'
                floatingLabelText='ISBN'
                onChange={this.handleChange}/>
            </div>
            <div style={textFieldStyle}>
              <TextField
                type='text'
                name='contact'
                ref='contact'
                floatingLabelText='Contact'
                onChange={this.handleChange}/>
            </div>
            <FlatButton label='Submit'/>
          </form>
        </Paper>
        <Snackbar
          ref='snackbar'
          message='Product Added!'/>
      </div>
    )
  }

})

module.exports = addProduct
