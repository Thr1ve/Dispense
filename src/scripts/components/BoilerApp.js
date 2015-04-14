

//START HERE 


///////////////
//
// Resources:
//
//  React Tutorial: http://facebook.github.io/react/docs/tutorial.html 
//
//  Also Helpful React Tutorial: http://ryanclark.me/getting-started-with-react/
//
//  Material-UI documentation: http://material-ui.com/#/components/buttons
//
///////////////////////////////

'use strict';

//React Components
var React                = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

//Material-ui 
var mui          = require('material-ui');
var RaisedButton = mui.RaisedButton;
var TextField    = mui.TextField;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/main.less');

var BoilerApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <RaisedButton label="Welcome" primary={true} />
          <RaisedButton label="to" secondary={true} />
          <TextField
            type="text" 
            placeholder="Material UI"
          />
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = BoilerApp;
