var View = require('ampersand-view');
var templates = require('../templates');

var log = require('bows')("Product Panel");

//this is a view which renders the information for a single product to
//a "panel" and assigns a click handler to said panel

module.exports = View.extend({

    template: templates.includes.product,

    bindings: {
        'model.isbn13': '[data-hook~=isbn13]',
        'model.title': '[data-hook~=title]',
        'model.selected': {
            type: 'booleanClass',
            name: 'text-primary'
        }
    },

    events : {
        'click' : 'requestCode',
    },

    initialize : function() {
        //store this view as the parent of the model for later
        this.model.parent = this;
    },

    requestCode : function() {
        log('calling requestCode function');
        this.model.collection.deselect();
        app.navigate('/dispenseApp/requestCode/' + this.model.id);
    },

});