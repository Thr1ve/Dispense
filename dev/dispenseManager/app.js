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

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

var app = App.extend({
  init () {
    // LOL SECURITY !1!!!1!!!!>
    // let allowed = window.prompt('')
    // if(allowed==='admin'){

    var self = this

    var io = require('socket.io-client')
    var socket = io('http://localhost:5000')
    // var socket = io('http://192.168.1.85')

    this.socket = socket

    this.products = new Products()
    this.contacts = new Contacts()
    this.newCode = new Code()

    this.filterText = ''

    socket.on('connect', function () {
      socket.on('countUpdate', function (data) {
        // console.log('Count Update Received! \n', data)
        // console.log('nCodes for this product was ' + self.products.get(data.old_val.productId).nCodes)
        self.products.get(data.old_val.productId).set('nCodes', data.new_val.nCodes)
        // console.log('nCodes for this product is now ' + self.products.get(data.old_val.productId).nCodes)
      })
    })

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
