import React from 'react'
import EditProductForm from '../atomic/editProductForm.js'

import Mui from 'material-ui'
let { Paper, Snackbar } = Mui

// var log = require('bows')('editProduct.js');

let EditProduct = React.createClass({

  success () {
    this.refs.snackbar.show()
  },

  render () {
    let { isbn13, title } = this.props.product
    return (
      <div>
        <Paper zDepth={2} style={{width: '95%', marginRight: 'auto', marginLeft: 'auto'}}>
          <h2 className='mui-font-style-headline' style={{textAlign: 'center'}}>Edit: {title}</h2>
          <h4 style={{textAlign: 'center'}}>{isbn13}</h4>
        </Paper>
        <EditProductForm {...this.props} success={this.success} />
        <Snackbar
          ref='snackbar'
          message='Edit Successful'/>
      </div>
    )
  }
})

module.exports = EditProduct
