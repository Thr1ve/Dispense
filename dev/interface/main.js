/* global location */
var React = require('react')

// var ComponentA = React.createClass({
//
//   render: function () {
//     return (<div>Hello world from A</div>)
//   }
// })

var ComponentB = React.createClass({

  render: function () {
    return (
      <div>Hello world from B</div>
    )
  }
})
// We create a function that will lazy load modules based on the current hash
var resolveRoute = function () {

  // If no hash or hash is '#' we lazy load the Home component
  if (location.pathname === '/dispenseApp') {
    require.ensure([], function () {
      var dispenseApp = require('../dispenseApp/app.js')
      // React.render(dispenseApp(), document.getElementById('app'))
      // React.render((<ComponentA/>), document.getElementById('app'))
      dispenseApp.init(document.body)
    })

  // Or if route is #admin we lazy load that
  } else if (location.pathname === '/dispenseManager') {
    require.ensure([], function () {
      // var dispenseManager = require('../dispenseManager/app.js')
      // React.render(dispenseManager(), document.getElementById('app'))
      React.render((<ComponentB/>), document.getElementById('app'))
    })
  }

}

// Resolve route on hash change
// window.onhashchange = resolveRoute

// Resolve current route
resolveRoute()
