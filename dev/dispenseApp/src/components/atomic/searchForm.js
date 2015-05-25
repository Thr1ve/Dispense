import React from 'react'
import app from 'ampersand-app'
import _ from 'underscore'
import Mui from 'material-ui'

let { TextField, FlatButton, Paper } = Mui

let SearchForm = React.createClass({

    getInitialState() {
        return {
            code: '',
            customerEmail: '',
            universityOrBusiness: '',
            representative: '',
            customerName: ''
        };
    },

    formatQuery(dataObj){
        let mapped = _.mapObject(dataObj, function(val, key){
            return val.props.value;
        }) 
        return _.omit(mapped, _.isEmpty);
    },

    handleSubmit(e) {
        e.preventDefault();
        let self = this;
        let query = this.formatQuery(this.refs);
        let filter = {
            filter: {
                where: query,
                limit: 50,
                order: 'date DESC'
            }
        };
        app.usedCodes.fetch({
            data:filter,
            success: function(collection, response){
                self.props.sendData(collection.serialize());
            }
        })
    },

    handleChange(event) {
        let newState= this.state;
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    },

    render() {

        let { 
            code, 
            customerEmail, 
            customerName, 
            universityOrBusiness, 
            representative,
            chatOrTicket
        } = this.state;

        return (
            <Paper zDepth={3} style={{width:'85%', marginLeft:'auto', marginRight:'auto'}}>
                <form onSubmit={this.handleSubmit} style={{padding:'20'}}>
                    <div style={{width:'75%', marginRight:'auto', marginLeft:'auto'}}>
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
                            floatingLabelText='Email'
                            value={customerEmail}
                            onChange={this.handleChange} />
                        <TextField
                            type='text'
                            ref='customerName'
                            name='customerName'
                            floatingLabelText='Name'
                            value={customerName}
                            onChange={this.handleChange} />
                    </div>
                    <div style={{width:'75%', marginRight:'auto', marginLeft:'auto'}}>
                        <TextField
                            type='text'
                            ref='universityOrBusiness'
                            name='universityOrBusiness'
                            floatingLabelText='Univ'
                            value={universityOrBusiness}
                            onChange={this.handleChange} />
                        <TextField
                            type='text'
                            ref='representative'
                            name='representative'
                            floatingLabelText='Rep'
                            value={representative}
                            onChange={this.handleChange} />
                        <TextField
                            type='text'
                            ref='chatOrTicket'
                            name='chatOrTicket'
                            floatingLabelText='Ticket'
                            value={chatOrTicket}
                            onChange={this.handleChange} />
                        <div style={{width:'75%', marginRight:'auto', marginLeft:'auto'}}>
                            <FlatButton label='Search' style={{width:'100%'}}/>
                        </div>
                    </div>
                </form>
            </Paper>
        );
    }

});

module.exports = SearchForm;