/*global app, $*/

var _        = require('underscore');
var domReady = require('domready');
// var config   = require('clientconfig');
var Router   = require('./router');
var MainView = require('./views/main');
var User     = require('./models/user-state');
var Products = require('./models/products');
var Code     = require('./models/request-collection');
var key = require('keymaster');

var socket = require('socket.io-client')();



module.exports = {

    //global keybinds
    globalKeys : {
        // 'key' : 'function'
    },

    // this is the the whole app initter
    blastoff: function () {

        var self      = window.app = this;

        _.each(this.globalKeys, function (value, k) {
            // register global keybinds
            key(k,  _.bind(self[value], self));
        });

        //attach socket.io to app
        this.io = socket;

        // create our global empty collections for products and a received code
        this.user     = new User();
        this.products = new Products();
        this.newCode  = new Code();

        // init our URL handlers and the history tracker
        this.router   = new Router();

        // wait for document ready to render our main view
        // this ensures the document has a body, etc.
        domReady(function () {
            // init our main view
            var mainView = self.view = new MainView({
                el: document.body
            });

            // ...and render it
            mainView.render();

            // we have what we need, we can now start our router and show the appropriate page
            self.router.history.start({pushState: true, root: '/'});
        });
    },

    // This is how you navigate around the app.
    // this gets called by a global click handler that handles
    // all the <a> tags in the app.
    // it expects a url without a leading slash.
    // for example: "costello/settings".
    navigate: function (page) {
        var url = (page.charAt(0) === '/') ? page.slice(1) : page;
        this.router.history.navigate(url, {trigger: true /*, replace:true*/});
    },
    redirectTo: function(page){
        var url = (page.charAt(0) === '/') ? page.slice(1) : page;
        this.router.redirectTo(url);
    }
};

// run it
module.exports.blastoff();
