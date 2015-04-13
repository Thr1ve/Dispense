var React = require('react');

var SearchField = require('./searchField.js');
var ProductTable = require('./productTable.js');

var FilterableProductTable = React.createClass({

    getInitialState: function() {
        console.log('getInitialState called');
        return {
            data: [],
            filterText: ''
        };
    },

    componentDidMount: function() {
        var self = this;
        //if statement added since refetching products broke app after using back button
        //this should be handled differently...perhaps store in user state?
        if(window.app.products.models.length > 0){
            self.setState({data:window.app.products});
        }
        else{
            window.app.products.fetch({
                success:function(model, res, opt){
                    self.setState({data:res});
                }
            }),[];
        }
    },
    
    handleUserInput: function(filterText) {
        var filtered;
        if(filterText){
            window.app.products.filter(filterText);
            filtered = window.app.products.filtered;
        }
        else{
            filtered = window.app.products; 
        }

        this.setState({
            filterText: filterText,
            data : filtered
        });
    },
    
    render: function() {
        console.log('render called');
        return (
            <div>
                <SearchField
                    filterText={this.state.filterText}
                    onUserInput={this.handleUserInput}/>
                <ProductTable
                    products={this.state.data}/>
            </div>
        );
    }
});

module.exports = FilterableProductTable;