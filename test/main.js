/* global location */
var React = require('react')

// We create a function that will lazy load modules based on the current hash
var resolveRoute = function () {

  // If no hash or hash is '#' we lazy load the Home component
  if (location.pathname === '/home') {
    require.ensure([], function () {
      var Home = require('./home.js')
      React.render((<Home/>), document.getElementById('app'))
    })

  // Or if route is #admin we lazy load that
  } else if (location.pathname === '/admin') {
    require.ensure([], function () {
      var Admin = require('./admin.js')
      React.render((<Admin/>), document.getElementById('app'))
    })
  }

}

// Resolve route on hash change
// window.onhashchange = resolveRoute

// Resolve current route
resolveRoute()
