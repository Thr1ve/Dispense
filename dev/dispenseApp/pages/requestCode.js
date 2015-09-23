import React from 'react'
import RequestCodeForm from '../../components/atoms/requestCodeForm.js'
import app from 'ampersand-app'
import Mui from 'material-ui'

let { Paper } = Mui

let requestCode = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState () {
    return {
      data: {}
    }
  },

  componentDidMount () {
    var self = this
    console.log(this.context.router.getCurrentParams())
    app.products.getOrFetch(this.context.router.getCurrentParams().productId,
      {all: true},
      function (err, model) {
        if (err) {
          console.error('model not found', err)
        }
        self.setState({data: model})
      }
    )
  },

  render () {
    var title, isbn13
    if (this.state.data) {
      title = this.state.data.title
      isbn13 = this.state.data.isbn13
    } else {
      console.log('this.state.data NOT FOUND')
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
