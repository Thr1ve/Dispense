var React = require('react');

var Mui        = require('material-ui');
var TextField  = Mui.TextField;
var FlatButton = Mui.FlatButton;

var requestCodeForm = React.createClass({

    getInitialState: function() {
        return {
            productId: this.props.productId,
            customerName: '',
            customerEmail: '',
            universityOrBusiness: '',
            representative: '',
            chatOrTicket: '',
        };
    },

    handleChange: function(event) {
        var newState= this.state;
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

        var customerName         = this.state.customerName;
        var customerEmail        = this.state.customerEmail;
        var universityOrBusiness = this.state.universityOrBusiness;
        var representative       = this.state.representative;
        var chatOrTicket         = this.state.chatOrTicket;
        
        return (
            <form style={formStyle}>
                <div style={textFieldStyle}>
                    <TextField 
                        type='text' 
                        name='customerName'          
                        floatingLabelText='Customer Name'            
                        value={customerName}         
                        onChange={this.handleChange}/>
                </div>
                <div style={textFieldStyle}>
                    <TextField style={textFieldStyle}
                        type='text' 
                        name='customerEmail'         
                        floatingLabelText='Customer Email Address'   
                        value={customerEmail}        
                        onChange={this.handleChange}/>
                </div>
                <div style={textFieldStyle}>
                    <TextField style={textFieldStyle}
                        type='text' 
                        name='universityOrBusiness'  
                        floatingLabelText='University or Business'   
                        value={universityOrBusiness} 
                        onChange={this.handleChange}/>
                </div>
                <div style={textFieldStyle}>
                    <TextField style={textFieldStyle}
                        type='text' 
                        name='representative'        
                        floatingLabelText='Representative'           
                        value={representative}       
                        onChange={this.handleChange}/>
                </div>
                <div style={textFieldStyle}>
                    <TextField style={textFieldStyle}
                        type='text' 
                        name='chatOrTicket'          
                        floatingLabelText='Chat or Ticket Number'    
                        value={chatOrTicket}         
                        onChange={this.handleChange}/>
                </div>
                <FlatButton style={{float:'right'}}label='Submit'/>
            </form>
        );
    }

});

module.exports = requestCodeForm;