import React from "react"
// import app from "ampersand-app"

import Mui from "material-ui"
let { Paper, TextField, FlatButton } = Mui

// var log = require("bows")("editProductForm.js")

let EditProductForm = React.createClass({

  getInitialState() {
    let { productId, title, isbn13 } = this.props.product
    let { mainEmail, cc } = this.props.contact
    return {
      productId: productId,
      title: title,
      isbn13: isbn13,
      mainEmail: mainEmail,
      cc: cc
    }
  },

  handleChange(event) {
    let newState = this.state
    newState[event.target.name] = event.target.value
    this.setState(newState)
  },

  handleSubmit(e){
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

    self.props.product.save(productData, {
      wait: true,
      success: function(){
        self.props.contact.save(contactData, {
          wait: true,
          success: function(){
            self.props.success()
          }
        })
      }
    })
  },

  render() {
    let { title, isbn13 } = this.state
    let { mainEmail, cc } = this.state

    let textFieldStyle = {
        display: "block"
    }
    let formStyle = {
        padding: "20"
    }
    return (
      <Paper zDepth={2} style={{width: "95%", marginTop: "30", marginRight: "auto", marginLeft: "auto"}}>
        <form style={formStyle} onSubmit={this.handleSubmit}>
          <div style={textFieldStyle}>
            <TextField
              type="text"
              name="title"
              ref="title"
              floatingLabelText="Title"
              defaultValue={title}
              onChange={this.handleChange}/>
          </div>
          <div style={textFieldStyle}>
            <TextField
              type="text"
              name="isbn13"
              ref="isbn13"
              floatingLabelText="ISBN"
              defaultValue={isbn13}
              onChange={this.handleChange}/>
          </div>
          <div style={textFieldStyle}>
            <TextField
              type="text"
              name="mainEmail"
              ref="mainEmail"
              floatingLabelText="Main Contact Email"
              defaultValue={mainEmail}
              onChange={this.handleChange}/>
          </div>
          <div style={textFieldStyle}>
            <TextField
              type="text"
              name="cc"
              ref="cc"
              floatingLabelText="CC Emails"
              defaultValue={cc}
              onChange={this.handleChange}/>
          </div>
          <FlatButton label="Submit"/>
        </form>
      </Paper>
    )
  }
})

module.exports = EditProductForm
