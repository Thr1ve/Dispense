
var MaterialTest = require('./pages/materialuitest.js')

var React        = require('react');
var Router       = require('react-router');
var { Route, RouteHandler, Link, DefaultRoute } = Router;


//// Not Working *******
var DatePickerPage 	 = require('./pages/components/date-picker.js');  	
var DialogPage		 = require('./pages/components/dialog.js');    	  	
var LeftNav			 = require('./pages/components/left-nav.js');		
//// will not load when uncommented 
// var IconButtonPage	 = require('./pages/components/icon-buttons.js');
// var IconsPage   	 = require('./pages/components/icons.js');
//// 
var ButtonPage  	 = require('./pages/components/buttons.js');
var DropDownMenuPage = require('./pages/components/drop-down-menu.js');
var MenusPage 		 = require('./pages/components/menus.js');
var PaperPage 		 = require('./pages/components/paper.js');
var SlidersPage 	 = require('./pages/components/sliders.js');
var SnackbarPage	 = require('./pages/components/snackbar.js');
var SwitchesPage	 = require('./pages/components/switches.js');
var TabsPage 		 = require('./pages/components/tabs.js');
var TextFieldsPage 	 = require('./pages/components/text-fields.js');
var ToolbarsPage 	 = require('./pages/components/toolbars.js');



var Dashboard = React.createClass({
  render : function() {
    return (
      <h1>DASHBOARD</h1>
    );
  }
});

var DefaultMaterial= React.createClass({
  render : function() {
    return (
      <h1>Default Material Route</h1>
    );
  }
});

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

module.exports = (
          <Route name="app" path="/dispenseApp" handler={App}>
            <Route name="materialTest" handler={MaterialTest}>
              	<Route name="buttonPage" path="buttonPage" handler={ButtonPage}/>
              	<Route name="datePickerPage" path="datePickerPage" handler={DatePickerPage}/>
              	<Route name="dialogPage" path="dialogPage" handler={DialogPage}/>
              	<Route name="leftNavPage" path="leftNavPage" handler={LeftNav}/>
              	<Route name="dropDownMenuPage" path="dropDownMenuPage" handler={DropDownMenuPage}/>
              	<Route name="menusPage" path="menusPage" handler={MenusPage}/>
              	<Route name="paperPage" path="paperPage" handler={PaperPage}/>
              	<DefaultRoute handler={DefaultMaterial}/>
            </Route>
            <DefaultRoute handler={Dashboard}/>
          </Route>
        );