var PageView      = require('./base');
var ProductView   = require('../views/productPanel');
var templates     = require('../templates');

var log = require('bows')("Home View");

//this is the home page.
//it will display products filtered by the input provided in the search box

module.exports = PageView.extend({

    template: templates.pages.homeSearch,

    pageTitle: 'products',

    events : {
        //whenever there is a "keyup" event in the input field,
        'keyup [data-hook=input]' : 'updateSearch'
    },

    keyboardShortcuts : {
        '`,1,2,3,4,5,6,7,8,9,0,-,=': 'focus',
         'q,w,e,r,t,y,u,i,o,p,[,],\\': 'focus',
         'a,s,d,f,g,h,j,k,l,;,\'': 'focus',
         'z,x,c,v,b,n,m,.,/' : 'focus',
         ',': 'focus',
         'control + v, command + v':  'focus',
         'tab': 'nextResult',
         'shift + tab': 'previousResult',
         'enter': 'requestCode'
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

    focus : function(e){
        if(e.target.className !=='form-input'){
            this.queryByHook('input').focus();
        }
    },

    nextResult : function(e) {
        e.preventDefault();
        var self = this;
        var length = this.collection.filtered.models.length;

        function loop() {
            log('looping');
            log(self.collection.filtered);
            self.collection.filtered.selected = 0;
            log(self.collection.filtered);
        }

        function increment() {
            log('incrementing');
            self.collection.filtered.selected +=1;
        }


        length - 1 <= this.collection.filtered.selected ? loop() : increment();
        this.collection.select(this.collection.filtered.models[this.collection.filtered.selected]);

    },

    previousResult : function(e) {
        e.preventDefault();
        var self = this;
        var length = this.collection.filtered.models.length;

        function loop() {
            log('looping');
            log(self.collection.filtered);
            self.collection.filtered.selected = length - 1;
            log(self.collection.filtered);
        }

        function decrement() {
            log('incrementing');
            self.collection.filtered.selected -=1;
        }

        log(this.collection.filtered.selected);

        this.collection.filtered.selected <= 0 ? loop() : decrement();
        this.collection.select(this.collection.filtered.models[this.collection.filtered.selected]);
    },

    requestCode : function() {
        log('calling requestCode function');
        if(!this.collection.isSelected){
            alert('No Product Selected');
            return;
        }
        this.collection.isSelected.parent.requestCode();
    },



});

