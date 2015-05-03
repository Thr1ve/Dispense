/*global app, $*/

var _            = require('underscore');
var domReady     = require('domready');
// var config    = require('clientconfig');

var React        = require('react');
var Router       = require('react-router');
var AppRoutes    = require('./appRoutes.js');

//Models **********
var User      = require('./models/user-state');
var Products  = require('./models/products');
var Code      = require('./models/usedCode-collection');

require('./styles/main.less');

module.exports = {

    //global keybinds
    globalKeys : {
        // 'key' : 'function'
    },

    // this is the the whole app initter
    blastoff: function () {

        var self = window.app = this;

        _.each(this.globalKeys, function (value, k) {
            // register global keybinds
            key(k,  _.bind(self[value], self));
        });

        // create our global empty collections for products and a received code
        this.user      = new User();
        this.products  = new Products();
        this.newCode   = new Code();
        this.usedCodes = new Code();


        // wait for document ready to render our main view
        // this ensures the document has a body, etc.
        domReady(function () {
            Router.run(AppRoutes, Router.HistoryLocation, function (Handler) {
              React.render(<Handler/>, document.body);
            });
        });
    }
};

// run it
module.exports.blastoff();

