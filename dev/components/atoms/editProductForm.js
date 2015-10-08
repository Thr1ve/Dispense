import React from 'react'

import Mui from 'material-ui'
let { Paper, TextField, FlatButton } = Mui
let ReactRethinkdb = require('react-rethinkdb')
let r = ReactRethinkdb.r

let EditProductForm = React.createClass({

  getInitialState () {
    let { id, productId, title, isbn13 } = this.props.product
    let { mainEmail, cc } = this.props.contact
    return {
      id: id,
      productId: productId,
      title: title,
      isbn13: isbn13,
      mainEmail: mainEmail,
      cc: cc
    }
  },

  handleChange (event) {
    let newState = this.state
    newState[event.target.name] = event.target.value
    this.setState(newState)
  },

  handleSubmit (e) {
    e.preventDefault()

    let self = this
    let title = this.refs.title.getValue()
    let isbn13 = this.refs.isbn13.getValue()
    let mainEmail = this.refs.mainEmail.getValue()
    let cc = this.refs.cc.getValue()

    let productData = {
      title: title,
      isbn13: isbn13
    }
    let contactData = {
      mainEmail: mainEmail,
      cc: cc
    }

    var productQuery = r.table('products').get(this.props.product.id).update(productData)
    var contactQuery = r.table('contacts').get(this.props.contact.id).update(contactData)

    ReactRethinkdb.DefaultSession.runQuery(productQuery)
    .then((res) => {
      ReactRethinkdb.DefaultSession.runQuery(contactQuery)
    })
    .catch((err) => {
      console.log(err)
    })
    .then((res) => {
      self.props.success()
    })
  },

  render () {
    let { title, isbn13 } = this.state
    let { mainEmail, cc } = this.state

    let textFieldStyle = {
      display: 'block'
    }
    let formStyle = {
      padding: '20'
    }
    return (
      <Paper zDepth={2} style={{width: '95%', marginTop: '30', marginRight: 'auto', marginLeft: 'auto'}}>
        <form style={formStyle} onSubmit={this.handleSubmit}>
          <div style={textFieldStyle}>
            <TextField
              type='text'
              name='title'
              ref='title'
              floatingLabelText='Title'
              defaultValue={title}
              onChange={this.handleChange}/>
          </div>
          <div style={textFieldStyle}>
            <TextField
              type='text'
              name='isbn13'
              ref='isbn13'
              floatingLabelText='ISBN'
              defaultValue={isbn13}
              onChange={this.handleChange}/>
          </div>
          <div style={textFieldStyle}>
            <TextField
              type='text'
              name='mainEmail'
              ref='mainEmail'
              floatingLabelText='Main Contact Email'
              defaultValue={mainEmail}
              onChange={this.handleChange}/>
          </div>
          <div style={textFieldStyle}>
            <TextField
              type='text'
              name='cc'
              ref='cc'
              floatingLabelText='CC Emails'
              defaultValue={cc}
              onChange={this.handleChange}/>
          </div>
          <FlatButton label='Submit' type='submit'/>
        </form>
      </Paper>
    )
  }
})

module.exports = EditProductForm
