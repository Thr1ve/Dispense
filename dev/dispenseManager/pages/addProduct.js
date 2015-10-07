import React from 'react'

import Mui from 'material-ui'
let { TextField, FlatButton, Paper, Snackbar } = Mui

let ReactRethinkdb = require('react-rethinkdb')
let r = ReactRethinkdb.r

let addProduct = React.createClass({

  handleSubmit (e) {
    // TODO: make submit button inactive after click until we return sucess or error to prevent accidental double-click
    e.preventDefault()

    let productId
    let title = this.refs.title.getValue()
    let isbn13 = this.refs.isbn13.getValue()
    let contact = this.refs.contact.getValue()

    let productData = {
      title: title,
      isbn13: isbn13,
      nCodes: 0,
      popularity: 0
    }
    let contactData = {
      mainEmail: contact
    }

    let countProductsQuery = r.table('products').count()

    ReactRethinkdb.DefaultSession.runQuery(countProductsQuery)
    .then((val) => {
      productId = val + 1
      productData.productId = productId
      ReactRethinkdb.DefaultSession.runQuery(r.table('products').insert(productData))
    })
    .then(() => {
      contactData.productId = productId
      ReactRethinkdb.DefaultSession.runQuery(r.table('contacts').insert(contactData))
    })
    .catch((err) => {
      console.log(err)
    })
    .then(() => {
      this.success()
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
            <FlatButton label='Submit' type='submit'/>
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
