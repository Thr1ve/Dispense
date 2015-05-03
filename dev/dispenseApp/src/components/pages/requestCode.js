var React = require('react');
var RequestCodeForm = require('../atomic/requestCodeForm.js');

var requestCode = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    getInitialState: function() {
        return {
            data: {}
        };
    },

    componentDidMount: function() {
        var self = this;
            window.app.products.getOrFetch(this.context.router.getCurrentParams().productId,
                {all: true}, 
                function(err, model){
                    if(err){
                        console.error('model not found', err);
                    }
                    self.setState({data:model});
            });
    },

    render: function() {
        var title, isbn13;
        if(this.state.data){
            title  = this.state.data.title;
            isbn13  = this.state.data.isbn13;
        }
        else{
            console.log('this.state.data NOT FOUND');
            title  = ' ';
            isbn13 = ' ';
        }
        return (
            <div>
                <div>{title}</div>
                <div>{isbn13}</div>
                <RequestCodeForm productId={this.context.router.getCurrentParams().productId} />
            </div>
        );
    }

});

module.exports = requestCode;