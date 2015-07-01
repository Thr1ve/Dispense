
import React from 'react'
import createSideEffect from 'react-side-effect'
import app from 'ampersand-app'
import ReactKeybinding from 'react-keybinding'

var Keybindings = createSideEffect(function handleChange(propsList) {
  var keyMap = {};
  propsList.forEach(function (props) {
    Object.assign(keyMap, props.keyMap);
  });

  for (var key in keyMap) {
    app.keyMap[key] = keyMap[key];
    }
});

module.exports = Keybindings;
