/*global app, $*/

var _         = require('underscore');
var domReady  = require('domready');
// var config = require('clientconfig');
var React     = require('react');
var Router    = require('react-router');
var Mui       = require('material-ui');
var RaisedButton = Mui.RaisedButton;
var DatePicker = Mui.DatePicker;
var Dialog = Mui.Dialog;
var DropDownMenu = Mui.DropDownMenu;
var Menu = Mui.Menu;
var { Route, RouteHandler, Link, DefaultRoute } = Router;

//Models **********
var User      = require('./models/user-state');
var Products  = require('./models/products');
var Code      = require('./models/usedCode-collection');
<<<<<<< Updated upstream

var key       = require('keymaster');

=======
var key       = require('keymaster');
var { Route, RouteHandler, Link } = Router;
>>>>>>> Stashed changes

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

        // init our URL handlers and the history tracker
        // this.router   = new Router();
<<<<<<< Updated upstream
        var standardActions = [
  { text: 'Cancel' },
  { text: 'Submit', onClick: this._onDialogSubmit }
];
var menuItems = [
   { payload: '1', text: 'Never' },
   { payload: '2', text: 'Every Night' },
   { payload: '3', text: 'Weeknights' },
   { payload: '4', text: 'Weekends' },
   { payload: '5', text: 'Weekly' },
];

var filterMenuItems = [
   { payload: '1', text: 'Text Opt-In', toggle: true},
   { payload: '2', text: 'Text Opt-Out', toggle: true, defaultToggled: true},
   { payload: '3', text: 'Voice Opt-Out', toggle: true, disabled: true}
];


        var App = React.createClass({
          render: function () {
            return (
              <div>
                <header>
                  <ul>
                    <RaisedButton label="Test"/>
                    <DatePicker hintText="Landscape Dialog"/>
                    <Dialog title="Dialog With Standard Actions" actions={standardActions}>
                      The actions in this window are created from the json that is passed in. 
                    </Dialog>
                    <DropDownMenu menuItems={menuItems} />
                    <Menu menuItems={filterMenuItems} />
                    <li><Link to="app">Dashboard</Link></li>
                    <li><Link to="inbox">Inbox</Link></li>
                    <li><Link to="calendar">Calendar</Link></li>
                  </ul>
                  Logged in as Jane
                </header>

                {/* this is the important part */}
                <RouteHandler/>
              </div>
            );
          }
        });
        var Inbox = React.createClass({
          render: function() {
            return (
              <h1>INBOX</h1>
            );
          }
        });
        var Calendar = React.createClass({
          render : function() {
            return (
              <h1>CALENDAR</h1>
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
            <Route name="inbox" handler={Inbox}/>
            <Route name="calendar" handler={Calendar}/>
            <DefaultRoute handler={Dashboard}/>
          </Route>
        );
=======
        var Home = React.createClass({
            render:  function() {
                return (
                    <h1>Hello, world!</h1>
                );
            }
        })
        var routes = (
          <Route handler={Home} path="/dispenseApp/">
          </Route>
        );

>>>>>>> Stashed changes
        // wait for document ready to render our main view
        // this ensures the document hasa body, etc.
        domReady(function () {
            // React.render( 
            //   <h1>Hello, world!</h1>,
            //   document.body
            // );
            Router.run(routes, Router.HistoryLocation, function (Handler) {
              React.render(<Handler/>, document.body);
            });
        });
    },
};

// run it
module.exports.blastoff();
