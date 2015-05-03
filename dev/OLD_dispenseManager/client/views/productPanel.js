var View = require('ampersand-view');
var templates = require('../templates');


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
        'click': 'productPage'
    },

    initialize : function() {
        //store this view as the parent of the model for later
        this.model.parent = this;
    },

    productPage : function() {
        app.navigate('/dispenseManager/productPage/' + this.model.productId);
    }

});