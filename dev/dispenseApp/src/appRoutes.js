
var MainSearch      = require('./components/pages/mainSearch.js');
var RequestCode     = require('./components/pages/requestCode.js');
var RequestedCodes  = require('./components/pages/requestedCodes.js');
var SearchUsedCodes = require('./components/pages/searchUsedCodes.js');

var Mui = require('material-ui');
var { DropDownMenu, FlatButton } = Mui;

var React        = require('react');
var Router       = require('react-router');
var { Route, RouteHandler,
      DefaultRoute, NotFoundRoute, Redirect } = Router;


var NotFound = React.createClass({
  render : function() {
    return (
      <h1>No Route Found</h1>
    );
  }
});

var App = React.createClass({
  mixins: [Router.State],

  contextTypes: {
      router: React.PropTypes.func
  },

  toMainSearch: function() {
      var { router } = this.context;
      router.transitionTo('mainSearch');
  },
    
  toSearchUsedCodes: function() {
      var { router } = this.context;
      router.transitionTo('searchUsedCodes');
  },

  toRequestedCodes: function() {
      var { router } = this.context;
      router.transitionTo('requestedCodes');
  },

  render: function () {
    let self = this;
    let { router } = self.context;
    let buttonStyle = {
        height: '50',
        opacity:'0.9'
    }
    return (
    <div>
      <div style={{zIndex: 10, position:'fixed', right: '0', top:'0' }}>
        <FlatButton label='Main Search'
          style={buttonStyle}
          onClick={this.toMainSearch}
          secondary={true} />
        <FlatButton label='Search Used Codes'
          style={buttonStyle}
          onClick={this.toSearchUsedCodes}
          secondary={true} />
        <FlatButton label='Requested Codes'
          style={buttonStyle}
          onClick={this.toRequestedCodes}
          secondary={true} />
      </div>
      <div style={{position:'relative', top:'55px'}}>
        <RouteHandler />
      </div>
    </div>
    );
  }
});

module.exports = (
          <Route name="app" path="/dispenseApp/" handler={App}>
            <Redirect from="/dispenseApp" to="/dispenseApp/"/>
            <Route name="mainSearch" handler={MainSearch}/>
            <Route name='requestCode' path="requestCode/:productId" handler={RequestCode}/>
            <Route name="searchUsedCodes" path="searchUsedCodes" handler={SearchUsedCodes}/>
            <Route name='requestedCodes' path="requestedCodes" handler={RequestedCodes}/>
            <DefaultRoute handler={MainSearch}/>
            <NotFoundRoute handler={NotFound}/>
          </Route>
        );