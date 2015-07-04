import React from 'react'
import createSideEffect from 'react-side-effect'

let _keyMap = {};

let Keybindings = createSideEffect(function handleChange(propsList) {
  let keyMap = {};
  propsList.forEach(function (props) {
    Object.assign(keyMap, props.keyMap);
  });

  for (var key in keyMap) {
    Mousetrap.bind(key, keyMap[key])
    _keyMap[key] = keyMap[key];
  }
},{

  componentWillUnmount() {
    for (var key in _keyMap){
      Mousetrap.unbind(key)
    }
  }

});

module.exports = Keybindings;
