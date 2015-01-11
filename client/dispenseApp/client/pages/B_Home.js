var PageView      = require('./base');
var templates     = require('../templates');
var ProductView   = require('../views/B_PanelFront');

var log = require('bows')("Home View");

//this is the home page.
//it will display products filtered by the input provided in the search box

module.exports = PageView.extend({

    template: templates.pages.B_Home,

    pageTitle: 'products',

    events : {
        //whenever there is a "keyup" event in the input field,
        'keyup [data-hook=input]' : 'updateSearch',
    },
    initialize : function() {
        this.registerKeyboardShortcuts('home');
    },

    updateSearch : function() {
        //this.model, in this case, is refering to app.user
        //basically, whenever the input value changes, we update it on the user model
        this.model.searchValue = this.queryByHook('input').value;
    },

    //find the <ul> with the data-hook "products-list" and append all of our product views
    //to the lists
    render: function () {
        this.renderWithTemplate();
        this.renderCollection(app.products.filtered, ProductView, this.queryByHook('products-list'));
        //if for some reason we have not received the data for the product models from the server,
        //then fetch that data
        if (!this.collection.length) {
            this.fetchCollection();
        }
    },

    fetchCollection: function () {
        this.collection.fetch();
        return false;
    },

    keyboardShortcuts : {
        '`,1,2,3,4,5,6,7,8,9,0,-,=': 'testAlert',
         'q,w,e,r,t,y,u,i,o,p,[,],\\': 'testAlert',
         'a,s,d,f,g,h,j,k,l,;,\'': 'testAlert',
         'z,x,c,v,b,n,m,.,/' : 'testAlert',

         ',': 'testAlert',
         'backspace': 'testAlert'
     },

    testAlert : function(e){
        log('hollow world', e);
        return false;
    }
});

