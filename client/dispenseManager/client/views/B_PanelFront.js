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
        'click .viewCodes' : 'toViewCodes',
        'click .addCodes' : 'toAddCodes'
    },


    toViewCodes : function() {
        app.navigate('/dispenseManager/productStatus/' + this.model.productId);
    },

    toAddCodes : function() {
        app.navigate('/dispenseManager/modifyProduct/' + this.model.productId);
    }
});