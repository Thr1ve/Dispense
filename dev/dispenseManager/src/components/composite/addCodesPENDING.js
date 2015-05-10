import React from 'react'
import CodeInput from '../atomic/codeInput.js'
import CodeOutput from '../atomic/codeOutput'
import AddCodesRequest from '../../models/addCodes.js'

import Mui from 'material-ui'
let { Paper, Snackbar, Dialog, FlatButton } = Mui

// var log = require('bows')("addCodes.js")

/*

  This is an addCodes page using the Mui Dialog component to verify and submit codes.
  It's been put on hold as the Mui Dialog component currently is unable to scroll if
  the content's height is greater than that of the window. 

  Awaiting  https://github.com/callemall/material-ui/pull/531 

 */

let AddCodes = React.createClass({

  getInitialState() {
    return {
      codesString: '',
      formattedCodes: []
    }
  },

  format(input) {
    let formatted = input
      //separate by newline
      .split('\n')
      //remove empty/null/undefined values from array
      .filter(function(e){return e;})
    let trimmed = formatted.map(function(val){
      return val.trim()
    })
    return trimmed
  },

  handleDialogCancel() {
    this.refs.dialog.dismiss()
    this.notifyCancel();
  },

  handleDialogSubmit() {
    this.refs.dialog.dismiss()
    // let self = this
    // let addCodesRequest = new AddCodesRequest()

    // addCodesRequest.save({
    //     "productId": this.props.productId,
    //     "codes":data
    // },
    //  {
    //     wait: true,
    //     isNew: true,
    //     success: function(model, response) {
    //         self.notifySuccess()
    //     },
    //     error: function(model, response) {
    //         console.log('error...', model, response)
    //     }
    // })
  },

  handleUserInput(string){
    this.setState({
      codesString : string
    })
  },

  notifyCancel(){
    this.refs.cancelSnackbar.show();  
  },

  notifySuccess() {
    this.refs.successSnackbar.show()
  },

  verify(){
    if(this.state.codesString.trim().length > 0){
      let formatted = this.format(this.state.codesString)
      this.setState({formattedCodes:formatted})
      this.refs.dialog.show()
    }
    else{
      this.refs.noCodesSnackbar.show() 
    }
  },

  render() {
    let { isbn13, title } = this.props.product
    let customActions = [
      <FlatButton
        key={1}
        label="Cancel"
        secondary={true}
        onClick={this.handleDialogCancel} />,
      <FlatButton
        key={2}
        label="Submit"
        primary={true}
        onClick={this.handleDialogSubmit} />
    ]
    return (
      <div>

        <Paper zDepth={2} style={{width:'95%', marginRight:'auto', marginLeft:'auto'}}>
          <h2 className='mui-font-style-headline' style={{textAlign:'center'}}>Add Codes for: {title}</h2>
          <h4 style={{textAlign:'center'}}>{isbn13}</h4>
        </Paper>

        <Paper zDepth={2} style={{width:'95%',marginTop: '30',marginRight:'auto', marginLeft:'auto'}}>
          <div style={{padding:30}}>
            <FlatButton 
              onClick={this.verify} 
              label='Verify Codes'/>
            <CodeInput 
              onUserInput={this.handleUserInput}/>
          </div>
        </Paper>

        <Dialog
          title="Dialog With Custom Actions"
          ref="dialog"
          actions={customActions}
          modal={true}
          style={{overflow:'scroll'}}
          dismissOnClickAway={false}>
            <CodeOutput 
              codes={this.state.formattedCodes} />
        </Dialog>

        <Snackbar
          ref="successSnackbar"
          message="Codes added!"/>
        <Snackbar
          ref="noCodesSnackbar"
          message="Add some codes first!"/>
        <Snackbar
          ref="cancelSnackbar"
          message="Canceled! No codes added."/>

      </div>
    )
  }
})

module.exports = AddCodes



/*

  codeInput at time of save
    
import React from 'react'
import Mui from 'material-ui'
let { TextField } = Mui

let CodeInput = React.createClass({

    handleChange() {
        this.props.onUserInput(
            this.refs.codesString.getValue()
        )
    },

    render() {
        return (
            <div style={{float:'left'}}>
              <TextField
                    type="text"
                    placeholder="Add Codes..."
                    multiLine={true}
                    value={this.props.codesString}
                    ref="codesString"
                    onChange={this.handleChange} />
            </div>
        )
    }

})

module.exports = CodeInput


**************************************************

  codeOutput at time of save

  import React from 'react'

import Mui from 'material-ui'
let { Paper } = Mui

let CodeOutput= React.createClass({
  render() {
    let styles = {
      display:'inline-block',
      height: 'auto',
      width: 'intrinsic',
      margin: 2
    }
    let codes = this.props.codes.map(function(val, ind, arr){
      return (
        <Paper 
          zDepth={1} 
          key={ind}
          style={styles}> 
            <p style={{padding:2}}> {val} </p>
        </Paper>
      )
    })
    return (
      <div >
          {codes}
      </div>
    )
  }
})

module.exports = CodeOutput



 */
