import React from 'react'
import Router from 'react-router'
import app from 'ampersand-app'
import AppRoutes from './appRoutes.js'

// Models **********
import User from './models/user-state'
import Products from './models/products'
import Contacts from './models/contacts'
import Code from './models/usedCode-collection'

// Styles **********
require('./styles/main.less');

window.app = app.extend({
  init () {
    //LOL SECURITY !1!!!1!!!!>
    // let allowed = window.prompt("");
    // if(allowed==='admin'){

        this.user      = new User();
        this.products  = new Products();
        this.contacts  = new Contacts()
        this.newCode   = new Code();

        // Attach to window for easier debugging
        window.app = this;

        // React-Router
        Router.run(AppRoutes, Router.HistoryLocation, function (Handler) {
          React.render(<Handler/>, document.body);
        });

      // }
      // else{
      //     window.location = 'http://www.wiley.com'
      // }
    }

})

app.init()
