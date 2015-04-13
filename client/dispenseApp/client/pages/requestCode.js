var React = require('react');

var requestCode = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    getInitialState: function() {
        console.log('getInititialState called', this);
        return {
            data: {}
        };
    },

    componentDidMount: function() {
        var self = this;
        // var model;
        console.log('componentDidMount called', this);
        // console.log('productId',this.context.router.getCurrentParams().productId);
        // console.log('products',window.app.products);
        // console.log('model',window.app.products.get(this.context.router.getCurrentParams().productId));
        // if(window.app.products.models.length > 0){
        //     console.log('products found', window.app.products); 
        //     window.app.products.get(this.context.router.getCurrentParams().productId
        //     //     function(err, model){
        //     //         self.setState({data:model});
        //     //         console.log('state in componentDidMount', self.state);
        //     // }
        //     );
        // }
        // else{
            // console.log('NO products found');
            window.app.products.getOrFetch(this.context.router.getCurrentParams().productId,
                {all: true}, 
                function(err, model){
                    if(err){
                        console.error('model not found', err);
                    }
                    console.log(model)
                    self.setState({data:model});
                    console.log('state in componentDidMount', self.state);
            });
        // }
    },

    // componentWillUnmount: function () {this.setState({data:{}}); },

    render: function() {
        console.log('render called', this);
        console.log('this.state.data in render', this.state.data);
        var title, isbn13;
        if(this.state.data){
            console.log('this.state.data :  ', this.state.data);
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
            </div>
        );
    }

});

module.exports = requestCode;