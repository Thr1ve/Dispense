var React = require('react');
var Router       = require('react-router');
var { Route, RouteHandler, Link, DefaultRoute } = Router;

// MUI ***********
var Mui          = require('material-ui');


module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <div>
          <ul>
            <li><Link to="buttonPage">Button Page</Link></li>
            <li><Link to="datePickerPage">Date-Picker Page</Link></li>
            <li><Link to="dialogPage">Dialog Page</Link></li>
            <li><Link to="leftNavPage">Left-Nav Page</Link></li>
            <li><Link to="dropDownMenuPage">Drop Down Menu Page</Link></li>
            <li><Link to="menusPage">Menus Page</Link></li>
            <li><Link to="paperPage">Paper Page</Link></li>
            <li><Link to="slidersPage">Sliders Page</Link></li>
            <li><Link to="snackbarPage">Snackbar Page</Link></li>
            <li><Link to="switchesPage">Switches Page</Link></li>
            <li><Link to="tabsPage">Tabs Page</Link></li>
            <li><Link to="textFieldsPage">Text Fields Page</Link></li>
            <li><Link to="toolbarsPage">Toolbars Page</Link></li>
          </ul>
        </div>

        {/* this is the important part */}
        <RouteHandler/>
      </div>
    );
  },


});






