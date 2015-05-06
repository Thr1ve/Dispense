var React  = require('react');
var Router = require('react-router');
var { RouteHandler } = Router;
import app from 'ampersand-app'

var Mui = require('material-ui');
var FlatButton = Mui.FlatButton;

var FilterableProductTable = require('../composite/filterableProductTable.js');

var log = require('bows')("mainSearch.js");

var MainSearch = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    handleClick: function(){
      var { router } = this.context;
      router.transitionTo('addProduct');
    },

    render: function() {
        console.log('mainSearch', this.props);
        return (
            <div>
                <div style={{position:'fixed', top:'0', right: '0', zIndex: '9' }} >
                    <FlatButton 
                        label='Add New Product'
                        onClick={this.handleClick}/>
                </div>
                <FilterableProductTable products={app.products}/>
                <RouteHandler {...this.props}/>
            </div>
        );
    }

});

module.exports = MainSearch;
