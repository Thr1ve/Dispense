/* global location */
// var React = require('react')

// We create a function that will lazy load modules based on the current hash
var resolveRoute = function () {

  // If no hash or hash is '#' we lazy load the Home component
  if (location.pathname === '/dispenseApp') {
    require.ensure([], function () {
      var dispenseApp = require('../dispenseApp/app.js')
      // React.render(dispenseApp(), document.getElementById('app'))
      // React.render((<ComponentA/>), document.getElementById('app'))
      dispenseApp.init()
    })

  // Or if route is #admin we lazy load that
  } else if (location.pathname === '/dispenseManager') {
    require.ensure([], function () {
      var dispenseManager = require('../dispenseManager/app.js')
      // var dispenseManager = require('../dispenseManager/app.js')
      // React.render(dispenseManager(), document.getElementById('app'))
      dispenseManager.init()
    })
  }

}

// Resolve route on hash change
// window.onhashchange = resolveRoute

// Resolve current route
resolveRoute()
