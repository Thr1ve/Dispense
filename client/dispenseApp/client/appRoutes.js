
var MaterialTest = require('./pages/materialuitest.js');
var MainSearch   = require('./pages/mainSearch.js');
var RequestCode  = require('./pages/requestCode.js');

var React        = require('react');
var Router       = require('react-router');
var { Route, RouteHandler, Link, DefaultRoute, NotFoundRoute } = Router;


//// Not Working *******
var DatePickerPage 	 = require('./pages/components/mui/date-picker.js');
var DialogPage		 = require('./pages/components/mui/dialog.js');
var LeftNav			 = require('./pages/components/mui/left-nav.js');
var SnackbarPage     = require('./pages/components/mui/snackbar.js');
var TabsPage         = require('./pages/components/mui/tabs.js');
//// will not load when uncommented 
// var IconButtonPage	 = require('./pages/components/icon-buttons.js');
// var IconsPage   	 = require('./pages/components/icons.js');
//// Working ****
var ButtonPage  	 = require('./pages/components/mui/buttons.js');
var DropDownMenuPage = require('./pages/components/mui/drop-down-menu.js');
var MenusPage 		 = require('./pages/components/mui/menus.js');
var PaperPage 		 = require('./pages/components/mui/paper.js');
var SlidersPage 	 = require('./pages/components/mui/sliders.js');
var SwitchesPage	 = require('./pages/components/mui/switches.js');
var TextFieldsPage 	 = require('./pages/components/mui/text-fields.js');
var ToolbarsPage 	 = require('./pages/components/mui/toolbars.js');
////                            *********


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
        <header>
          <ul>
            <li><Link to="app">DashBoard</Link></li>
            <li><Link to="materialTest">Material UI Test</Link></li>
            <li><Link to="mainSearch">Main Search</Link></li>
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
                <Route name="slidersPage" path="slidersPage" handler={SlidersPage}/>
                <Route name="snackbarPage" path="snackbarPage" handler={SnackbarPage}/>
                <Route name="switchesPage" path="switchesPage" handler={SwitchesPage}/>
                <Route name="tabsPage" path="tabsPage" handler={TabsPage}/>
                <Route name="textFieldsPage" path="textFieldsPage" handler={TextFieldsPage}/>
                <Route name="toolbarsPage" path="toolbarsPage" handler={ToolbarsPage}/>
              	<DefaultRoute handler={DefaultMaterial}/>
            </Route>
            <Route name="mainSearch" handler={MainSearch}>
            </Route>
            <Route name='requestCode' path="requestCode/:productId" handler={RequestCode}/>
            <DefaultRoute handler={Dashboard}/>
            <NotFoundRoute handler={NotFound}/>
          </Route>
        );