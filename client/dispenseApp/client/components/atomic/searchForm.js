var React = require('react');

var Mui = require('material-ui');
var TextField = Mui.TextField;
var FlatButton = Mui.FlatButton;

var _ = require('underscore');

var SearchForm = React.createClass({

    getInitialState: function() {
        return {
            code: '',
            customerEmail: '',
            universityOrBusiness: '',
            representative: '',
            customerName: ''
        };
    },

    formatQuery: function(dataObj){
        var mapped = _.mapObject(dataObj, function(val, key){
            return val.props.value;
        }) 
        return _.omit(mapped, _.isEmpty);
    },

    handleSubmit : function(e) {
        e.preventDefault();
        var self = this;
        var query = this.formatQuery(this.refs);
        var filter = {
            filter: {
                where: query
            }
        };
        window.app.usedCodes.fetch({
            data:filter,
            success: function(collection, response){
                // This removes the productId from all models in the collection 
                // ...I don't think I want this...
                // var cleaned = collection.serialize().map(function(val, ind, arr){
                //     var stripped = _.omit(val, 'productId');  
                //     return stripped;
                // });
                self.props.sendData(collection.serialize());
            }
        })
    },

    handleChange : function() {
        var newState= this.state;
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    },

    render: function() {

        var { 
            code, 
            customerEmail, 
            customerName, 
            universityOrBusiness, 
            representative,
            chatOrTicket
        } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div >
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
                    <div>
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
                        <FlatButton label='Search'/>
                    </div>
                </form>
            </div>
        );
    }

});

module.exports = SearchForm;