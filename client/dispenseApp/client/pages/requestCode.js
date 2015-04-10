var React = require('react');

var requestCode = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    getInitialState: function() {
        return {
            data: []
        };
    },

    componentDidMount: function() {
        var self = this;
        window.app.products.getOrFetch(this.context.router.getCurrentParams().productId,
            {all: true}, 
            function(err, model){
                self.setState({data:model});
        });
    },

    render: function() {
        return (
            <div>
                <div>{this.state.data.title}</div>
                <div>{this.state.data.isbn13}</div>
            </div>
        );
    }

});

module.exports = requestCode;