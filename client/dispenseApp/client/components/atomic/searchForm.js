var React = require('react');

var Mui = require('material-ui');
var TextField = Mui.TextField;
var FlatButton = Mui.FlatButton;

var SearchForm = React.createClass({

    getInitialState: function() {
        return {
            code: ''
        };
    },

    handleSubmit : function(e) {
        e.preventDefault();
        var self = this;
        var filter = {
            filter: {
                where: {
                    code: this.refs.code.props.value
                }
            }
        };
        window.app.usedCodes.fetch({
            data:filter,
            success: function(model, response){
                console.log('success'); 
                console.log(model);
                self.props.sendData(model);
            }
        })
    },

    handleChange : function() {
        var newState= this.state;
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    },

    render: function() {

        var code = this.state.code
        var customerEmail        = this.state.customerEmail;
        var universityOrBusiness = this.state.universityOrBusiness;
        var representative       = this.state.representative;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        type='text'
                        ref='code'
                        name='code'
                        floatingLabelText='Code'
                        value={code}
                        onChange={this.handleChange} />
                    <TextField
                        type='text'
                        ref='customerEmail'
                        name='customerEmail'
                        floatingLabelText='Customer Email Address'
                        value={customerEmail}
                        onChange={this.handleChange} />
                    <TextField
                        type='text'
                        ref='universityOrBusiness'
                        name='universityOrBusiness'
                        floatingLabelText='University or Business'
                        value={universityOrBusiness}
                        onChange={this.handleChange} />
                    <TextField
                        type='text'
                        ref='representative'
                        name='representative'
                        floatingLabelText='Representative'
                        value={representative}
                        onChange={this.handleChange} />
                    <FlatButton label='Submit'/>
                </form>
            </div>
        );
    }

});

module.exports = SearchForm;