import React from 'react'

import Mui from 'material-ui'
let { Paper, TextField, FlatButton } = Mui

// var log = require('bows')("editProductForm.js");

let EditProductForm = React.createClass({

    getInitialState() {
        let { productId, title, isbn13 } = this.props.product
        return {
            productId: productId ,
            title    : title,
            isbn13   : isbn13    
        }
    },

    handleChange(event) {
        let newState = this.state
        newState[event.target.name] = event.target.value
        this.setState(newState)
    },

    handleSubmit(e){
        e.preventDefault()
        let title = this.refs.title.getValue()
        let isbn13= this.refs.isbn13.getValue()
        let data = {
            title   : title,
            isbn13  : isbn13
        }

        this.props.product.save(data,{
            wait: true , 
            success:function(){
                console.log('Edit Successfull')
            }
        })
    },
    
    render() {
        let title = this.state.title;
        let isbn13 = this.state.isbn13;
        let textFieldStyle= {
            display:'block',
        }
        let formStyle = {
            padding:'20'
        }
        return (
            <Paper zDepth={2} style={{width:'95%',marginTop: '30',marginRight:'auto', marginLeft:'auto'}}>
                <form style={formStyle} onSubmit={this.handleSubmit}>
                    <div style={textFieldStyle}>
                        <TextField 
                            type='text' 
                            name='title'          
                            ref='title'          
                            floatingLabelText='Title'            
                            defaultValue={title}
                            onChange={this.handleChange}/>
                    </div>
                    <div style={textFieldStyle}>
                        <TextField
                            type='text'
                            name='isbn13'
                            ref='isbn13'
                            floatingLabelText='ISBN'
                            defaultValue={isbn13}
                            onChange={this.handleChange}/>
                    </div>
                    <FlatButton label='Submit'/>
                </form>
            </Paper>
        );
    }

});

module.exports = EditProductForm;