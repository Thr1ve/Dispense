var React  = require('react');
var Router = require('react-router');
var { RouteHandler } = Router;

var mui = require('material-ui');

var FilterableProductTable = require('../composite/filterableProductTable.js');

var log = require('bows')("mainSearch.js");

var MainSearch = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    render: function() {
        console.log('mainSearch', this.props);
        return (
            <div>
                <FilterableProductTable products={window.app.products}/>
                <RouteHandler {...this.props}/>
            </div>
        );
    }

});

module.exports = MainSearch;
