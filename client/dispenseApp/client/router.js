/*global app*/
var Router = require('ampersand-router');

//pages
var HomePage = require('./pages/B_Home');
var RequestCodePage = require('./pages/requestCode');
var CodeReceived = require('./pages/codeReceived');

var log = require('bows')("Router");

//this is where we define what happens when the user enters
//or navigates to a given URL
// https://github.com/ampersandjs/ampersand-router
// http://read.humanjavascript.com/ch09-clientside-routing.html

module.exports = Router.extend({

    //these map URL's to specific functions below
    routes: {

        'dispenseApp': 'home',
        'dispenseApp/requestCode/:id': 'requestCode',
        'dispenseApp/codeReceived': 'codeReceived',
        '(*path)': 'catchAll'

    },

    // ------- ROUTE HANDLERS ---------
    home: function() {

        //clearing the user data clears the search text, since search text
        //is currently stored in the User Model
        app.user.clear();

        this.trigger('page', new HomePage({

            //the below makes app.user available in the code for our home page as "this.model"
            //and app.products available as "this.collection"
            model: app.user,
            collection: app.products

        }));
    },

    requestCode: function(id) {

        var findModel = app.products.get(id);

        this.trigger('page', new RequestCodePage({

            collection: app.newCode,
            model: findModel,
            productId: id

        }));
    },

    codeReceived: function() {

        this.trigger('page', new CodeReceived({

            collection: app.newCode

        }));
    },

    //this makes it so that unrecognized URL's will reroute the user back to the homepage
    catchAll: function() {

        this.redirectTo('dispenseApp');

    }
});