'use strict'
var React = require('react');

var Mui        = require('material-ui');
var TextField  = Mui.TextField;
var FlatButton = Mui.FlatButton;

var EditProductForm = React.createClass({


    // getInitialState: function() {
        // return {
        //     product : {},
        // };
    // },

    componentDidMount: function(){
    },

    handleChange: function(event) {
        // var newState = this.state;
        // newState[event.target.name] = event.target.value;
        // this.setState(newState);
    },

    handleSubmit: function(e){
        e.preventDefault();
        // this.props.product.save({
        //     title   : this.refs.title.props.value,
        // }, {
        //     wait: true , 
        //     success:function(){
        //         console.log('Edit Successfull')
        //     }
        // });
    },
    
    render: function() {
        let { title } = this.props.product;
        console.log(title);
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