import React from 'react'
import RequestCodeForm from '../../components/atoms/requestCodeForm.js'
import Mui from 'material-ui'

import {r, DefaultMixin, QueryRequest} from 'react-rethinkdb'

let { Paper } = Mui

let requestCode = React.createClass({

  mixins: [DefaultMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  observe (props, state) {
    // FIX: This should be optional; if we already have all the products, we don't need to query the server for them
    //   - can we return {} instead of a QueryRequest here or will that break things ?
    //      - Yes we can, thanks to 'this.data.product &&' in line 45

    // Turn our route into a number ( can't query with string )
    let prodId = parseInt(this.context.router.getCurrentParams().productId, 10)

    // Get the product from the server
    return {
      product: new QueryRequest({
        query: r.table('products').filter({productId: prodId}),
        initial: []
      })
    }
  },

  render () {
    let title, isbn13

    // SLOPPY ?
    // If we have the product, display it
    if (this.data.product && this.data.product._value.length > 0) {
      title = this.data.product._value[0].title
      isbn13 = this.data.product._value[0].isbn13
    } else {
    // If we don't have the product, display empty space so we don't break things
      title = ' '
      isbn13 = ' '
    }

    return (
      <div>
        <Paper zDepth={2} style={{width: '95%', marginRight: 'auto', marginLeft: 'auto'}}>
          <h2 className='mui-font-style-headline' style={{textAlign: 'center'}}>{title}</h2>
          <h4 style={{textAlign: 'center'}}>{isbn13}</h4>
        </Paper>
        <RequestCodeForm productId={this.context.router.getCurrentParams().productId} />
      </div>
    )
  }

})

module.exports = requestCode
