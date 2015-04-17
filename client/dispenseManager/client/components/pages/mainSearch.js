var React  = require('react');
var Router = require('react-router');
var { RouteHandler } = Router;

var mui = require('material-ui');

var FilterableProductTable = require('../composite/filterableProductTable.js');

var MainSearch = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    render: function() {
        return (
            <div>
                <FilterableProductTable products={window.app.products}/>
                <RouteHandler/>
            </div>
        );
    }

});

module.exports = MainSearch;
