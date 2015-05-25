import React from 'react'
import Router from 'react-router'
import app from 'ampersand-app'
import AppRoutes from './appRoutes.js'

// Models **********
import User from './models/user-state'
import Products from './models/products'
import Code from './models/usedCode-collection'

window.app = app.extend({
  init () {

    this.user      = new User();
    this.products  = new Products();
    this.newCode   = new Code();
    this.usedCodes = new Code();

    // Attach to window for easier debugging
    window.app = this;

    // React-Router
    Router.run(AppRoutes, Router.HistoryLocation, function (Handler) {
      React.render(<Handler/>, document.body);
    });
  }
})

app.init()

