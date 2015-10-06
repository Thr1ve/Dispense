import React from 'react'
import EditProductForm from '../atoms/editProductForm.js'

import Mui from 'material-ui'
let { Paper, Snackbar } = Mui

let EditProduct = React.createClass({

  success () {
    this.refs.snackbar.show()
  },

  render () {
    let title = this.props.product.title
    let isbn13 = this.props.product.isbn13

    return (
      <div>
        <Paper zDepth={2} style={{width: '95%', marginRight: 'auto', marginLeft: 'auto'}}>
          <h2 className='mui-font-style-headline' style={{textAlign: 'center'}}>Edit: {title}</h2>
          <h4 style={{textAlign: 'center'}}>{isbn13}</h4>
        </Paper>
        <EditProductForm product={this.props.product} contact={this.props.contact} success={this.success} />
        <Snackbar
          ref='snackbar'
          message='Edit Successful'/>
      </div>
    )
  }
})

module.exports = EditProduct
