var React = require('react');
import app from 'ampersand-app'

var Mui        = require('material-ui');
var TextField  = Mui.TextField;
var FlatButton = Mui.FlatButton;

var addProduct = React.createClass({

    handleSubmit: function(e){
        e.preventDefault();
        var title = this.refs.title.getValue()
        var isbn13= this.refs.isbn13.getValue()
        var data = {
            title   : title,
            isbn13  : isbn13
        };

        app.products.create(data,{
            wait: true , 
            success:function(model, resp){
                console.log('Edit Successfull')
                console.log(model);
                console.log(resp);
            }
        });
    },

    getInitialState: function() {
        return {
            title    : '',
            isbn13   : '' 
        };
    },

    handleChange: function(event) {
        var newState = this.state;
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    },

    render: function() {

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
                <FlatButton style={{float:'right'}} label='Submit'/>
            </form>
        );
    }

});

module.exports = addProduct;