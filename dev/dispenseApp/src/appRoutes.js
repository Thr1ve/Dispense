
var MainSearch      = require('./components/pages/mainSearch.js');
var RequestCode     = require('./components/pages/requestCode.js');
var RequestedCodes  = require('./components/pages/requestedCodes.js');
var SearchUsedCodes = require('./components/pages/searchUsedCodes.js');

var mui = require('material-ui');
var FlatButton = mui.FlatButton;

var React        = require('react');
var Router       = require('react-router');
var { Route, RouteHandler, DefaultRoute, NotFoundRoute } = Router;


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

  toSearchUsedCodes: function() {
      var { router } = this.context;
      router.transitionTo('searchUsedCodes');
  },

  render: function () {
    return (
    <div>
      <header style={{
        position:'fixed',
        top:'0', left: '0',
        width: '100%', height:'50px',
        opacity: '0.8', backgroundColor: 'white',
        zIndex: '4' }} >
        <FlatButton
          style={{float:'right', height:'50px', zIndex:5}}
          label='Requested Codes'
          onClick={this.toRequestedCodes}/>
        <FlatButton
          style={{float:'right', height:'50px', zIndex:5}}
          label='Search Used Codes'
          onClick={this.toSearchUsedCodes}/>
      </header>
      <div style={{position:'relative', top:'50px'}}>
        <RouteHandler />
      </div>
    </div>
    );
  }
});

//change the app route path to '/dispenseApp' to run in loopback / for production
// note: need to find better way so i can have both webpack and live version simultaneously
module.exports = (
          <Route name="app" path="/dispenseApp" handler={App}>
            <Route name="mainSearch" handler={MainSearch}/>
            <Route name='requestCode' path="requestCode/:productId" handler={RequestCode}/>
            <Route name="searchUsedCodes" path="searchUsedCodes" handler={SearchUsedCodes}/>
            <Route name='requestedCodes' path="requestedCodes" handler={RequestedCodes}/>
            <DefaultRoute handler={MainSearch}/>
            <NotFoundRoute handler={NotFound}/>
          </Route>
        );