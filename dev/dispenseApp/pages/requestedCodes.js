import React from 'react'
import app from 'ampersand-app'
import Mui from 'material-ui'

let { Paper, FlatButton } = Mui

let requestedCodes = React.createClass({

  getInitialState () {
    return {
      data: [],
      currIndex: ''
    }
  },

  componentDidMount () {
    this.setState({
      data: app.newCode.models,
      currIndex: app.newCode.models.length - 1
    })
  },

  nextCode () {
    if (this.state.currIndex + 1 >= this.state.data.length) {
      this.setState({currIndex: 0})
    } else {
      this.setState({currIndex: this.state.currIndex + 1})
    }
  },

  previousCode () {
    if (this.state.currIndex - 1 < 0) {
      this.setState({ currIndex: this.state.data.length - 1 })
    } else {
      this.setState({currIndex: this.state.currIndex - 1})
    }
  },

  render () {
    let code = this.state.data[this.state.currIndex]
    let recent = this.state.currIndex === this.state.data.length - 1 ? ('Most Recent') : ''

    if (code) {
      return (
        <Paper zDepth={2}
          style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
          <div style={{padding: '20'}}>
            <FlatButton label='Next Code' style={{float: 'right'}} primary={true} onClick={this.nextCode}/>
            <div style={{padding: 5, width: '100%', height: 'auto', textAlign: 'center', display: 'inline'}}>{recent}</div>
            <FlatButton label='Previous Code' style={{float: 'left'}} primary={true} onClick={this.previousCode}/>
            <h1 style={{textAlign: 'center'}} className={ 'mui-font-style-title'}> Code                  : {code.code} </h1>
            <h1 style={{textAlign: 'center'}} className={'mui-font-style-title'}> Customer Name         : {code.customerName} </h1>
            <h1 style={{textAlign: 'center'}} className={'mui-font-style-title'}> Customer Email        : {code.customerEmail} </h1>
            <h1 style={{textAlign: 'center'}} className={'mui-font-style-title'}> University Or Business: {code.universityOrBusiness} </h1>
            <h1 style={{textAlign: 'center'}} className={'mui-font-style-title'}> Representative        : {code.representative} </h1>
            <h1 style={{textAlign: 'center'}} className={'mui-font-style-title'}> Chat Or Ticket        : {code.chatOrTicket} </h1>
            <h1 style={{textAlign: 'center'}} className={'mui-font-style-title'}> Date                  : {code.date} </h1>
          </div>
        </Paper>
      )
    } else {
      return (
				<h1 style={{textAlign: 'center'}}> You haven't generated any codes yet. </h1>
			)
    }
  }
})

module.exports = requestedCodes
