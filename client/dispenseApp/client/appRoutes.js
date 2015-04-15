
var MainSearch   = require('./components/pages/mainSearch.js');
var RequestCode  = require('./components/pages/requestCode.js');

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
  render: function () {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
});

//change the app route path to '/dispenseApp' to run in loopback / for production
// note: need to find better way so i can have both webpack and live version simultaneously
module.exports = (
          <Route name="app" path="/" handler={App}>
            <Route name="mainSearch" handler={MainSearch}/>
            <Route name='requestCode' path="requestCode/:productId" handler={RequestCode}/>
            <DefaultRoute handler={MainSearch}/>
            <NotFoundRoute handler={NotFound}/>
          </Route>
        );