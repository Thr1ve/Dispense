import React from 'react'
import CodeInput from '../atomic/codeInput.js'
import CodeOutput from '../atomic/codeOutput'
import AddCodesRequest from '../../models/addCodes.js'

import Mui from 'material-ui'
let { Paper, Snackbar, Dialog, FlatButton } = Mui

// var log = require('bows')("addCodes.js");

let AddCodes = React.createClass({

    getInitialState() {
        return {
            codesString: ''
        }
    },

    handleUserInput(string){
        this.setState({
            codesString : string
        })
    },

    success() {
        this.refs.snackbar.show()
    },

    handleUserSubmit(data){

        let self = this
        let addCodesRequest = new AddCodesRequest()

        this.handleCustomDialogTouchTap() 

        // addCodesRequest.save({
        //     "productId": this.props.productId,
        //     "codes":data
        // },
        //  {
        //     wait: true,
        //     isNew: true,
        //     success: function(model, response) {
        //         self.success();
        //     },
        //     error: function(model, response) {
        //         console.log('error...', model, response)
        //     }
        // })
    },

    render() {
        let { isbn13, title } = this.props.product

        let customActions = [
          <FlatButton
            key={1}
            label="Cancel"
            secondary={true}
            onClick={this._handleCustomDialogCancel} />,
          <FlatButton
            key={2}
            label="Submit"
            primary={true}
            onClick={this._handleCustomDialogSubmit} />
        ]


        return (
            <div>
                <Paper zDepth={2} style={{width:'95%', marginRight:'auto', marginLeft:'auto'}}>
                    <h2 className='mui-font-style-headline' style={{textAlign:'center'}}>Add Codes for: {title}</h2>
                    <h4 style={{textAlign:'center'}}>{isbn13}</h4>
                </Paper>
                <Paper zDepth={2} style={{width:'95%',marginTop: '30',marginRight:'auto', marginLeft:'auto'}}>
                    <div style={{padding:30}}>
                        <CodeInput 
                            onUserInput={this.handleUserInput}
                            filterText={this.state.codesString}/>
                        <CodeOutput 
                            codesString={this.state.codesString}
                            onUserSubmit={this.handleUserSubmit}/>
                    </div>
                </Paper>
                <Snackbar
                  ref="snackbar"
                  message="Codes Added!"/>
                  <Dialog
                  title="Dialog With Custom Actions"
                  ref="customDialog"
                  actions={customActions}
                  modal={true}
                  dismissOnClickAway={this.state.dismissOnClickAway}>
                  The actions in this window were passed in as an array of react objects.
                </Dialog>
            </div>
        );
    },

    _handleCustomDialogCancel() {
        this.refs.customDialog.dismiss();
    },

    _handleCustomDialogSubmit() {
         this.refs.customDialog.dismiss();
    },
    handleCustomDialogTouchTap() {
        this.refs.customDialog.show();
    }

});

module.exports = AddCodes
