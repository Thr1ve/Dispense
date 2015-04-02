var React = require('react');

// MUI ***********
var Mui          = require('material-ui');
var RaisedButton = Mui.RaisedButton;
var Dialog       = Mui.Dialog;
var DropDownMenu = Mui.DropDownMenu;
var Menu         = Mui.Menu;
var ToolbarGroup = Mui.ToolbarGroup;
var Toolbar      = Mui.Toolbar;
var FontIcon     = Mui.FontIcon;
var DropDownIcon = Mui.DropDownIcon;
var TextField    = Mui.TextField;
var Snackbar     = Mui.Snackbar;

// For DropDownMenu *********
var menuItems = [
  { payload: '1', text: 'Never' },
  { payload: '2', text: 'Every Night' },
  { payload: '3', text: 'Weeknights' },
  { payload: '4', text: 'Weekends' },
  { payload: '5', text: 'Weekly' }
];
//            ************ //

// For Menu *********
var filterMenuItems = [
  { payload: '1', text: 'Text Opt-In', toggle: true},
  { payload: '2', text: 'Text Opt-Out', toggle: true, defaultToggled: true},
  { payload: '3', text: 'Voice Opt-Out', toggle: true, disabled: true}
];
//       *********** //

// For Toolbar ******
var filterOptions = [
  { payload: '1', text: 'All Broadcasts' },
  { payload: '2', text: 'All Voice' },
  { payload: '3', text: 'All Text' },
  { payload: '4', text: 'Complete Voice' },
  { payload: '5', text: 'Complete Text' },
  { payload: '6', text: 'Active Voice' },
  { payload: '7', text: 'Active Text' },
];
var iconMenuItems = [
  { payload: '1', text: 'Download' },
  { payload: '2', text: 'More Info' }
];
//            *************** //


module.exports = React.createClass({

  render: function() {
    return (
      <div>

        <Toolbar>
          <ToolbarGroup key={0} float="left">
            <DropDownMenu menuItems={filterOptions} />
          </ToolbarGroup>
          <ToolbarGroup key={1} float="right">
            <FontIcon className="mui-icon-pie" />
            <FontIcon className="mui-icon-sort" />
            <DropDownIcon iconClassName="icon-navigation-expand-more" menuItems={iconMenuItems} />
            <span className="mui-toolbar-separator">&nbsp;</span>
            <RaisedButton label="Create Broadcast" primary={true} />
          </ToolbarGroup>
        </Toolbar>

        <RaisedButton label="Test"/>

        <DropDownMenu menuItems={menuItems} />

        <Menu menuItems={filterMenuItems} />

        <TextField hintText="Hint Text" />

        <Snackbar
          message="Event added to your calendar"
          action="undo"
          onActionTouchTap={this._handleAction}/>
      </div>
    );
  },

  _handleAction: function() {
    //We can add more code to this function, but for now we'll just include an alert.
    alert("We removed the event from your calendar.");
  },

});