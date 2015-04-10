var React = require('react');

var SearchField = require('./searchField.js');
var ProductTable = require('./productTable.js');

var FilterableProductTable = React.createClass({

    getInitialState: function() {
        return {
            data: [],
            filterText: ''
        };
    },

    componentDidMount: function() {
        var self = this;
        this.props.products.fetch({
            success:function(model, res, opt){
                self.setState({data:res});
            }
        }),[];
        self.setState({data:self.props.products});
    },
    
    handleUserInput: function(filterText) {
        var filtered;
        if(filterText){
            this.products.filter(filterText);
            filtered = this.products.filtered;
        }
        else{
            filtered = this.products; 
        }

        this.setState({
            filterText: filterText,
            data : filtered
        });
    },
    
    render: function() {
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