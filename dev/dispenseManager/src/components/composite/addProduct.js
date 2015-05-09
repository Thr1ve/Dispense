import React from 'react'
import app from 'ampersand-app'

import Mui from 'material-ui'
let { TextField, FlatButton, Paper } = Mui

let addProduct = React.createClass({

    handleSubmit(e){
        e.preventDefault()
        let title = this.refs.title.getValue()
        let isbn13= this.refs.isbn13.getValue()
        let contact= this.refs.contact.getValue()
        let data = {
            title   : title,
            isbn13  : isbn13
        }
        app.products.create( data, {
            wait: true, 
            success:function( model, resp ) {
                console.log('Edit Successfull')
                console.log(model)
                console.log(resp)
            }
        })
    },

    getInitialState() {
        return {
            title    : '',
            isbn13   : '',
            contact  : '' 
        }
    },

    handleChange(event) {
        let newState = this.state
        newState[event.target.name] = event.target.value
        this.setState(newState)
    },

    render() {
        let textFieldStyle = {
            display:'block',
        }
        let formStyle = {
            padding:20
        }
        return (
            <Paper zDepth={3} style={{width:'85%', marginRight:'auto', marginLeft:'auto'}}>
                <form style = {formStyle} onSubmit={this.handleSubmit}>
                    <div style={textFieldStyle}>
                        <TextField 
                            type='text' 
                            name='title'          
                            ref='title'          
                            floatingLabelText='Title'            
                            onChange={this.handleChange}/>
                    </div>
                    <div style={textFieldStyle}>
                        <TextField
                            type='text'
                            name='isbn13'
                            ref='isbn13'
                            floatingLabelText='ISBN'
                            onChange={this.handleChange}/>
                    </div>
                    <div style={textFieldStyle}>
                        <TextField
                            type='text'
                            name='contact'
                            ref='contact'
                            floatingLabelText='Contact'
                            onChange={this.handleChange}/>
                    </div>
                    <FlatButton label='Submit'/>
                </form>
            </Paper>
        )
    }

});

module.exports = addProduct