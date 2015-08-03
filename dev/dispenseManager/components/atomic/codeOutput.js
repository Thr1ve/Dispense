import React from 'react'

import Mui from 'material-ui'
let { Paper, RaisedButton } = Mui

let CodeOutput = React.createClass({

  getContent () {
    let styles = {
      display: 'inline-block',
      height: 'auto',
      width: 'intrinsic',
      margin: 2
    }
    let mapped = this.props.codes.map(function (val, ind) {
      return (
        <Paper
          zDepth={1}
          key={ind}
          style={styles}>
            <p style={{padding: 3}}> {val} </p>
        </Paper>
      )
    })
    if (this.props.codes.length > 0) {
      return (
        <div>
          <div
              style={{display: 'block', top: 0, left: 0}}>
            <RaisedButton
              onClick={this.props.submit}
              primary={true}
              label='Submit Codes'/>
          </div>
            {mapped}
        </div>
      )
    } else {
      return (
        <p> Enter codes in the textbox to the left </p>
      )
    }
  },

  render () {
    let content = this.getContent()
    return (
      <Paper zDepth={2} style={{width: '72%', marginTop: '10', marginRight: '10', float: 'right'}}>
        <div style={{padding: 30, minHeight: 450}}>
          <div>
            {content}
          </div>
        </div>
      </Paper>
    )
  }
})

module.exports = CodeOutput
