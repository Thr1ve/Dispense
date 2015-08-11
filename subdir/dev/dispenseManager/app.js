require('mousetrap')

if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (target) {
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object')
      }

      var to = Object(target)
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i]
        if (nextSource === undefined || nextSource === null) {
          continue
        }
        nextSource = Object(nextSource)

        var keysArray = Object.keys(Object(nextSource))
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex]
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey)
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey]
          }
        }
      }
      return to
    }
  })
}

import React from 'react'
import Router from 'react-router'
import App from 'ampersand-app'
import AppRoutes from './appRoutes.js'

// Models **********
import Products from './../models/products'
import Contacts from './../models/contacts'
import Code from './../models/usedCode-collection'

var app = App.extend({
  init () {
    // LOL SECURITY !1!!!1!!!!>
    // let allowed = window.prompt('')
    // if(allowed==='admin'){

    this.products = new Products()
    this.contacts = new Contacts()
    this.newCode = new Code()

    this.filterText = ''

    // Attach to window for easier debugging
    window.app = this

    // React-Router
    Router.run(AppRoutes, Router.HistoryLocation, function (Handler) {
      React.render(<Handler/>, document.body)
    })

      // }
      // else{
      //     window.location = 'http://www.wiley.com'
      // }
  }

})

app.init()

module.exports = app