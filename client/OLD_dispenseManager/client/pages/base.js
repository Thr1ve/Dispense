/*global $*/
// base view for pages
var View = require('ampersand-view');
//var ViewSwitcher = require('ampersand-view-switcher');
var _ = require('underscore');
var key = require('keymaster');

var log = require('bows')("Base View");

key.filter = function() {return true;};

module.exports = View.extend({

    initialize: function() {

        log('Initializing in the base class');

        this.escapeKeyBuffer = 0;
        this.registerKeyboardShortcuts(this.pageTitle);

    },

    // register keyboard handlers
    registerKeyboardShortcuts: function () {

        //if scope is given then use it. If not then use the view ID
        var scope = scope || this.cid;
        var self = this;

        //reset keybinds (otherwise key handler function is called an additional time each
        //time we run this function)
        this.unregisterKeyboardShortcuts(scope);

        _.each(this.keyboardShortcuts, function (value, k) {
            // register key handler scoped to this page
            key(k, scope, _.bind(self[value], self));
        });

        //switch to our scope
        key.setScope(scope);

        log('Keybind scope set to', scope);

    },

    unregisterKeyboardShortcuts: function () {
        var scope = scope || this.cid;
        key.deleteScope(scope);
    },

    returnNavigate : function() {
        log('returnNavigate function has been called');

        var contains =  this.query('.escapePrompt').classList.contains('active');

        if(this.escapeKeyBuffer === 0){
            this.escapeKeyBuffer++ ;
            this.escapeAlert.reset();
        }
        else if( contains ){
            console.log(this.query('.escapePrompt').classList);
            this.escapeKeyBuffer = 0;
            app.navigate('/dispenseManager');
        }
        else{
            escapeKeyBuffer = 0;
            this.escapeAlert.reset();
        }
    }

});