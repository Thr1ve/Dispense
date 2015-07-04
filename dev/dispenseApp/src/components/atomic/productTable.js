var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var Paper = mui.Paper;
var Menu = mui.Menu;

var ProductTable = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    _onItemClick: function(e, key, menuItem) {
        var { router } = this.context;
        console.log(menuItem)
        router.transitionTo('requestCode', { productId: menuItem.payload});
    },

    render: function() {
        var rows = [];

        this.props.products.forEach(function(product) {
            rows.push({payload: product.productId, text: product.title, data: product.isbn13})
        }.bind(this));

        console.log(rows)

        return (
            <div>
                <Menu menuItems={rows} onItemClick={this._onItemClick}/>
            </div>
        );
    }
});


module.exports = ProductTable;
