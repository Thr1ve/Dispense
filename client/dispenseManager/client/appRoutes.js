
var MainSearch   = require('./components/pages/mainSearch.js');
var ManageProduct = require('./components/pages/manageProduct.js');
var EditProduct = require('./components/composite/editProduct.js');
var AddCodes = require('./components/composite/addCodes.js');
var ProductStats = require('./components/composite/productStats.js');

var mui = require('material-ui');
var FlatButton = mui.FlatButton;

var React        = require('react');
var Router       = require('react-router');
var { Route, RouteHandler, DefaultRoute, NotFoundRoute } = Router;

var log = require('bows')("appRoutes.js");

var NotFound = React.createClass({
  render : function() {
    return (
      <h1>No Route Found</h1>
    );
  }
});

var App = React.createClass({

  contextTypes: {
      router: React.PropTypes.func
  },
    
  toRequestedCodes: function() {
      var { router } = this.context;
      router.transitionTo('requestedCodes');
  },

  render: function () {
    console.log('appRoutes', this.props);
    return (
    <div>
      <header style={{
        position:'fixed',
        top:'0', left: '0',
        width: '100%', height:'50px',
        opacity: '0.8', backgroundColor: 'white',
        zIndex: '4' }} >
      </header>
      <div style={{position:'relative', top:'50px'}}>
        <RouteHandler {...this.props}/>
      </div>
    </div>
    );
  }
});

//change the app route path to '/dispenseApp' to run in loopback / for production
// note: need to find better way so i can have both webpack and live version simultaneously
module.exports = (
          <Route name="app" path="/" handler={App}>
            <Route name="mainSearch" handler={MainSearch}/>
            <Route name='product' path="product/:productId" handler={ManageProduct}>
              <Route name="editProduct" handler={EditProduct}/>
              <Route name="addCodes" handler={AddCodes}/>
              <Route name="productStats" handler={ProductStats}/>
              <DefaultRoute handler={EditProduct}/>
            </Route>
            <DefaultRoute handler={MainSearch}/>
            <NotFoundRoute handler={NotFound}/>
          </Route>
        );