'use strict'
var React = require('react');

var Mui        = require('material-ui');
var TextField  = Mui.TextField;
var FlatButton = Mui.FlatButton;

var log = require('bows')("editProductForm.js");

var EditProductForm = React.createClass({

    getInitialState: function() {
        log('getInitialState', this.props);
        var { productId, title, isbn13 } = this.props.product;
        return {
            productId: productId ,
            title    : title,
            isbn13   : isbn13    
        };
    },

    handleChange: function(event) {
        var newState = this.state;
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    },

    handleSubmit: function(e){
        e.preventDefault();
        var data = {
            "productId": this.props.product.productId,
            "title"   : this.refs.title.props.value,
        }
        this.props.product.save(data,{
            wait: true , 
            success:function(){
                console.log('Edit Successfull')
            }
        });
    },
    
    render: function() {
        log('render', this.props);

        var title = this.state.title;

        var textFieldStyle= {
            display:'block',
        }

        var formStyle = {
            width  : '40%',
            float  : 'left'
        }

        return (
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
                <FlatButton style={{float:'right'}} label='Submit'/>
            </form>
        );
    }

});

module.exports = EditProductForm;