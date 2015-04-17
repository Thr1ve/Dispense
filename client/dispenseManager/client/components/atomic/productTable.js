var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var Menu = mui.Menu;

var ProductTable = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
      },

    render: function() {
        var rows = [];

        this.props.products.forEach(function(product) {
            // rows.push(<ProductRow product={product} key={product.id} />);
            rows.push({payload: product.productId, text: product.title, data: product.isbn13})
        }.bind(this));

        return (
            <div>
                <Menu menuItems={rows} onItemClick={this._onItemClick}/>
            </div>
        );
    },

    _onItemClick: function(e, key, menuItem) {
        var { router } = this.context;
        router.transitionTo('requestCode', { productId: menuItem.payload});
    }
});


module.exports = ProductTable;
