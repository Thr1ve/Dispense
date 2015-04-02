/*global app, $*/

var _            = require('underscore');
var domReady     = require('domready');
// var config    = require('clientconfig');

var React        = require('react');
var Router       = require('react-router');
var { Route, RouteHandler, Link, DefaultRoute } = Router;

var MaterialTest = require('./components/materialuitest.js')

//Models **********
var User      = require('./models/user-state');
var Products  = require('./models/products');
var Code      = require('./models/usedCode-collection');

module.exports = {

    //global keybinds
    globalKeys : {
        // 'key' : 'function'
    },

    // this is the the whole app initter
    blastoff: function () {

        var self = window.app = this;

        _.each(this.globalKeys, function (value, k) {
            // register global keybinds
            key(k,  _.bind(self[value], self));
        });

        // create our global empty collections for products and a received code
        this.user     = new User();
        this.products = new Products();
        this.newCode  = new Code();

        var App = React.createClass({
          render: function () {
            return (
              <div>
                <header>
                  <ul>
                    <li><Link to="app">DashBoard</Link></li>
                    <li><Link to="materialTest">Material UI Test</Link></li>
                  </ul>
                </header>

                {/* this is the important part */}
                <RouteHandler/>
              </div>
            );
          }
        });

        var Dashboard = React.createClass({
          render : function() {
            return (
              <h1>DASHBOARD</h1>
            );
          }
        });

        var routes = (
          <Route name="app" path="/dispenseApp" handler={App}>
            <Route name="materialTest" handler={MaterialTest}/>
            <DefaultRoute handler={Dashboard}/>
          </Route>
        );

        // wait for document ready to render our main view
        // this ensures the document hasa body, etc.
        domReady(function () {
            Router.run(routes, Router.HistoryLocation, function (Handler) {
              React.render(<Handler/>, document.body);
            });
        });
    },
};

// run it
module.exports.blastoff();
